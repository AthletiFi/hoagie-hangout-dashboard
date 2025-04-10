// AthletiFi Hoagie Hangout Dashboard Scripts
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all charts and interactive elements
  initFeedbackTypeChart();
  initPriorityMatrix();
  setupInteractions();
});

// Initialize Feedback Type Distribution Chart
function initFeedbackTypeChart() {
  const ctx = document.getElementById('feedbackTypeChart').getContext('2d');
  
  const feedbackChart = new Chart(ctx, {
      type: 'doughnut',
      data: feedbackTypeData,
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
              legend: {
                  position: 'bottom',
                  labels: {
                      boxWidth: 12,
                      padding: 15
                  }
              },
              tooltip: {
                  callbacks: {
                      label: function(context) {
                          const value = context.raw;
                          const total = context.dataset.data.reduce((a, b) => a + b, 0);
                          const percentage = Math.round((value / total) * 100);
                          return `${context.label}: ${value} (${percentage}%)`;
                      }
                  }
              }
          },
          cutout: '70%'
      }
  });
}

// Initialize Feature Priority Matrix Chart
function initPriorityMatrix() {
  const ctx = document.getElementById('priorityMatrix').getContext('2d');
  
  const priorityMatrix = new Chart(ctx, {
      type: 'bubble',
      data: {
          datasets: featurePriorityData.datasets
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
              x: {
                  title: {
                      display: true,
                      text: 'Feature Importance (based on frequency)',
                      font: {
                          weight: 'bold'
                      }
                  },
                  min: 1,
                  max: 5,
                  ticks: {
                      stepSize: 1
                  }
              },
              y: {
                  title: {
                      display: true,
                      text: 'Implementation Difficulty',
                      font: {
                          weight: 'bold'
                      }
                  },
                  min: 1,
                  max: 5,
                  ticks: {
                      stepSize: 1
                  }
              }
          },
          plugins: {
              legend: {
                  position: 'top',
              },
              tooltip: {
                  callbacks: {
                      label: function(context) {
                          return [
                              `Feature: ${context.raw.name}`,
                              `Importance: ${context.raw.x.toFixed(1)}/5`,
                              `Difficulty: ${context.raw.y.toFixed(1)}/5`,
                              `Mentions: ~${Math.floor(context.raw.r)}`
                          ];
                      }
                  }
              },
              annotation: {
                  annotations: {
                      box1: {
                          type: 'box',
                          xMin: 3.5,
                          xMax: 5,
                          yMin: 1,
                          yMax: 2.5,
                          backgroundColor: 'rgba(54, 179, 126, 0.1)',
                          borderColor: 'rgba(54, 179, 126, 0.5)',
                          borderWidth: 1,
                          label: {
                              display: true,
                              content: 'High Value, Low Effort',
                              position: 'center'
                          }
                      }
                  }
              }
          }
      }
  });
}

// Setup interactive elements and dynamic content
function setupInteractions() {
    // Add full-screen button for the raw data table
    const rawDataHeader = document.querySelector('#raw-data .d-flex.justify-content-between');
    if (rawDataHeader) {
        const fullScreenBtn = document.createElement('button');
        fullScreenBtn.className = 'btn btn-sm btn-outline-secondary ms-2';
        fullScreenBtn.innerHTML = '<i class="bi bi-arrows-fullscreen"></i> Fullscreen';
        
        rawDataHeader.querySelector('.btn-toolbar').prepend(fullScreenBtn);
        
        fullScreenBtn.addEventListener('click', function() {
            const tableSection = document.getElementById('raw-data');
            
            if (!document.fullscreenElement) {
                tableSection.requestFullscreen().catch(err => {
                    console.error(`Error attempting to enable fullscreen: ${err.message}`);
                });
            } else {
                document.exitFullscreen();
            }
        });
    }
  // Add smooth scrolling for navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 70,
                  behavior: 'smooth'
              });
              
              // Update active nav link
              document.querySelectorAll('.nav-link').forEach(navLink => {
                  navLink.classList.remove('active');
              });
              this.classList.add('active');
          }
      });
  });

  // Initialize popovers for evidence items
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  const popoverList = [...popoverTriggerList].map(popoverTriggerEl => {
      return new bootstrap.Popover(popoverTriggerEl);
  });

  // Handle feature priority list item clicks
  document.querySelectorAll('.list-group-item').forEach(item => {
      item.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Toggle active state
          document.querySelectorAll('.list-group-item').forEach(listItem => {
              listItem.classList.remove('active');
          });
          this.classList.add('active');
          
          // For future implementation: show detailed info about selected feature
      });
  });

  // Track scroll position to update active sidebar link
  window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY + 100;
      
      document.querySelectorAll('section').forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              const id = section.getAttribute('id');
              document.querySelectorAll('.nav-link').forEach(link => {
                  link.classList.remove('active');
              });
              document.querySelector(`.nav-link[href="#${id}"]`).classList.add('active');
          }
      });
  });

  // Add mobile sidebar toggle functionality
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  if (sidebarToggle) {
      sidebarToggle.addEventListener('click', function() {
          document.querySelector('.sidebar').classList.toggle('show');
      });
  }

  // Initialize any tooltips
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => {
      return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  // Initialize raw feedback data table
  initRawFeedbackTable();
}

// Helper function to create dynamic content elements
function createDynamicElement(type, className, content) {
  const element = document.createElement(type);
  if (className) element.className = className;
  if (content) element.innerHTML = content;
  return element;
}

// Raw Feedback Table Functionality
function initRawFeedbackTable() {
    const tableBody = document.getElementById('feedback-table-body');
    const searchInput = document.getElementById('feedback-search');
    const searchBtn = document.getElementById('search-btn');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const ageFilterBtns = document.querySelectorAll('.age-filter-btn');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    const pageIndicator = document.getElementById('page-indicator');
    const visibleCountElement = document.getElementById('visible-count');
    const totalCountElement = document.getElementById('total-count');
    
    // Table state
    let currentPage = 1;
    const itemsPerPage = 15;
    let currentFilter = 'all';
    let currentAgeFilter = 'all';
    let currentSort = { column: 'name', direction: 'asc' };
    let searchTerm = '';
    
    // Initialize the table
    renderTable();
    
    // Update counters
    totalCountElement.textContent = rawFeedbackData.length;
    
    // Filter by feedback type
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Toggle active state
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Update filter and reset page
            currentFilter = this.getAttribute('data-filter');
            currentPage = 1;
            renderTable();
        });
    });
    
    // Filter by age group
    ageFilterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Toggle active state
            ageFilterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Update filter and reset page
            currentAgeFilter = this.getAttribute('data-age');
            currentPage = 1;
            renderTable();
        });
    });
    
    // Search functionality
    searchBtn.addEventListener('click', function() {
        searchTerm = searchInput.value.toLowerCase();
        currentPage = 1;
        renderTable();
    });
    
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            searchTerm = searchInput.value.toLowerCase();
            currentPage = 1;
            renderTable();
        }
    });
    
    // Sorting functionality
    document.querySelectorAll('#feedback-table th.sortable').forEach(th => {
        th.addEventListener('click', function() {
            const column = this.getAttribute('data-sort');
            
            // Toggle sort direction if same column
            if (currentSort.column === column) {
                currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
            } else {
                currentSort.column = column;
                currentSort.direction = 'asc';
            }
            
            // Update sort indicators
            document.querySelectorAll('#feedback-table th').forEach(header => {
                header.classList.remove('sort-asc', 'sort-desc');
            });
            
            this.classList.add(currentSort.direction === 'asc' ? 'sort-asc' : 'sort-desc');
            
            // Reset page and render
            currentPage = 1;
            renderTable();
        });
    });
    
    // Pagination
    prevPageBtn.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            renderTable();
        }
    });
    
    nextPageBtn.addEventListener('click', function() {
        const filteredData = getFilteredData();
        const totalPages = Math.ceil(filteredData.length / itemsPerPage);
        
        if (currentPage < totalPages) {
            currentPage++;
            renderTable();
        }
    });
    
    // Get filtered and sorted data
    function getFilteredData() {
        return rawFeedbackData.filter(item => {
            // Filter by type
            const typeMatch = 
                currentFilter === 'all' || 
                item.type.toLowerCase().includes(currentFilter.toLowerCase());
            
            // Filter by age
            const ageMatch = 
                currentAgeFilter === 'all' || 
                item.birthyear.toString() === currentAgeFilter;
            
            // Filter by search term
            const searchMatch = 
                searchTerm === '' || 
                item.feedback.toLowerCase().includes(searchTerm) ||
                item.name.toLowerCase().includes(searchTerm);
            
            return typeMatch && ageMatch && searchMatch;
        }).sort((a, b) => {
            const aVal = a[currentSort.column];
            const bVal = b[currentSort.column];
            
            // Handle numeric vs string sorting
            if (!isNaN(aVal) && !isNaN(bVal)) {
                return currentSort.direction === 'asc' ? aVal - bVal : bVal - aVal;
            } else {
                const aStr = String(aVal).toLowerCase();
                const bStr = String(bVal).toLowerCase();
                
                if (aStr < bStr) return currentSort.direction === 'asc' ? -1 : 1;
                if (aStr > bStr) return currentSort.direction === 'asc' ? 1 : -1;
                return 0;
            }
        });
    }
    
    // Render the table with current filters, sorting, and pagination
    function renderTable() {
        const filteredData = getFilteredData();
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, filteredData.length);
        const pageData = filteredData.slice(startIndex, endIndex);
        
        // Update pagination controls
        const totalPages = Math.ceil(filteredData.length / itemsPerPage);
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;
        pageIndicator.textContent = `Page ${currentPage} of ${totalPages || 1}`;
        
        // Update visible count
        visibleCountElement.textContent = filteredData.length;
        
        // Clear table
        tableBody.innerHTML = '';
        
        // No results message
        if (pageData.length === 0) {
            const row = document.createElement('tr');
            const cell = document.createElement('td');
            cell.colSpan = 6;
            cell.textContent = 'No matching feedback found';
            cell.className = 'text-center py-4';
            row.appendChild(cell);
            tableBody.appendChild(row);
            return;
        }
        
        // Render table rows
        pageData.forEach(item => {
            const row = document.createElement('tr');
            
            // Name cell
            const nameCell = document.createElement('td');
            nameCell.textContent = item.name;
            row.appendChild(nameCell);
            
            // Feedback cell
            const feedbackCell = document.createElement('td');
            let feedbackText = item.feedback;
            
            // Highlight search term if present
            if (searchTerm && feedbackText.toLowerCase().includes(searchTerm.toLowerCase())) {
                const regex = new RegExp(`(${searchTerm})`, 'gi');
                feedbackText = feedbackText.replace(regex, '<span class="feedback-highlight">$1</span>');
            }
            
            feedbackCell.innerHTML = feedbackText;
            row.appendChild(feedbackCell);
            
            // Source cell
            const sourceCell = document.createElement('td');
            sourceCell.textContent = item.source;
            row.appendChild(sourceCell);
            
            // Type cell
            const typeCell = document.createElement('td');
            const typeText = item.type;
            
            // Add badge for type
            if (['Bug', 'Enhancement', 'Feature Request', 'Feedback'].includes(typeText)) {
                const badge = document.createElement('span');
                badge.className = `badge badge-${typeText.toLowerCase().replace(' request', '')}`;
                badge.textContent = typeText;
                typeCell.appendChild(badge);
            } else {
                typeCell.textContent = typeText;
            }
            
            row.appendChild(typeCell);
            
            // Rating cell
            const ratingCell = document.createElement('td');
            ratingCell.textContent = item.rating;
            row.appendChild(ratingCell);
            
            // Age group cell
            const birthYearCell = document.createElement('td');
            birthYearCell.textContent = item.birthyear === 2009 ? '16yo' : '13yo';
            birthYearCell.className = item.birthyear === 2009 ? 'text-info' : 'text-success';
            row.appendChild(birthYearCell);
            
            tableBody.appendChild(row);
        });
    }
}