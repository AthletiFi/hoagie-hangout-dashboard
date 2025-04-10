// AthletiFi Hoagie Hangout Focus Group Data

// Participant Data
const participantData = {
  total: 30,
  byAge: [
      { group: '16-year-olds (2009)', count: 15 },
      { group: '13-year-olds (2012)', count: 15 }
  ]
};

// Feedback Type Distribution
const feedbackTypeData = {
  labels: ['General Feedback', 'Bug Reports', 'Feature Requests', 'Enhancements'],
  datasets: [{
      data: [32, 14, 18, 24],
      backgroundColor: [
          'rgba(54, 179, 126, 0.8)',  // success
          'rgba(255, 86, 48, 0.8)',   // danger
          'rgba(0, 184, 217, 0.8)',   // info
          'rgba(255, 171, 0, 0.8)'    // warning
      ],
      borderColor: [
          'rgba(54, 179, 126, 1)',
          'rgba(255, 86, 48, 1)',
          'rgba(0, 184, 217, 1)',
          'rgba(255, 171, 0, 1)'
      ],
      borderWidth: 1
  }]
};

// Feature Priority Matrix Data
const featurePriorityData = {
  datasets: [{
      label: '16-year-olds',
      data: [
          { x: 4.2, y: 3.5, r: 20, name: 'Video/Highlights Integration' },
          { x: 3.8, y: 2.9, r: 15, name: 'College Coach Connections' },
          { x: 3.2, y: 2.2, r: 12, name: 'Professional Card Designs' },
          { x: 2.7, y: 3.8, r: 10, name: 'Profile View Notifications' },
          { x: 3.3, y: 2.7, r: 9, name: 'Performance Stats' },
          { x: 2.5, y: 2.3, r: 7, name: 'Player Endorsements' }
      ],
      backgroundColor: 'rgba(0, 184, 217, 0.7)',
      borderColor: 'rgba(0, 184, 217, 1)'
  }, {
      label: '13-year-olds',
      data: [
          { x: 3.5, y: 3.7, r: 18, name: 'Scrollable Activity Feed' },
          { x: 2.1, y: 4.0, r: 14, name: 'Fantasy Team Creation' },
          { x: 2.8, y: 2.9, r: 12, name: 'Sports-themed Backgrounds' },
          { x: 3.1, y: 2.3, r: 9, name: 'Privacy Controls' },
          { x: 1.9, y: 3.1, r: 8, name: 'Gaming Elements' },
          { x: 2.6, y: 1.8, r: 7, name: 'App vs. Website' }
      ],
      backgroundColor: 'rgba(54, 179, 126, 0.7)',
      borderColor: 'rgba(54, 179, 126, 1)'
  }, {
      label: 'Both Age Groups',
      data: [
          { x: 4.5, y: 2.5, r: 12, name: 'Better Background Removal' },
          { x: 4.0, y: 2.0, r: 11, name: 'Improved Sign-up Flow' },
          { x: 3.5, y: 2.2, r: 10, name: 'Photo Positioning Control' },
          { x: 3.0, y: 2.8, r: 8, name: 'Bio Section Guidance' },
          { x: 2.5, y: 2.5, r: 6, name: 'Multi-sport Support' }
      ],
      backgroundColor: 'rgba(0, 82, 204, 0.7)',
      borderColor: 'rgba(0, 82, 204, 1)'
  }]
};

// Top Feature Requests
const topFeatureRequests = [
  {
      name: 'Video/Highlights Integration',
      group: '16yo Priority',
      count: 14,
      quotes: [
          '"There could also be a place where you can put your best plays/moments"',
          '"There should be a place for highlights and full game films"',
          '"I think they should add highlights so other people can see what our strengths are"'
      ]
  },
  {
      name: 'Scrollable Activity Feed',
      group: '13yo Priority',
      count: 8,
      quotes: [
          '"It would be cool if like you had a TikTok part of it where you could just scroll"',
          '"I think there should be videos you can scroll through"',
          '"A feed like insta would be cool"'
      ]
  },
  {
      name: 'College Coach Connections',
      group: '16yo Priority',
      count: 7,
      quotes: [
          '"You guys should also add coaches from colleges so other prospects can see and message colleges"',
          '"If a college coach sees something they like from your profile, you should be notified"',
          '"What is missing? Adding scouts or coaches and links to message them"'
      ]
  },
  {
      name: 'Fantasy Team Creation',
      group: '13yo Priority',
      count: 6,
      quotes: [
          '"You should have an option where you can make your own lineup with you and your friends\' cards"',
          '"You can add your own team as like a FIFA card and then face off against other teams"',
          '"In FIFA mobile you get to design your own teams"'
      ]
  },
  {
      name: 'Profile Privacy Controls',
      group: 'Both Age Groups',
      count: 5,
      quotes: [
          '"I don\'t like how anyone can view my profile. I would like to be able to set it to private or public"',
          '"We would definitely make sure we only showed the best content"'
      ]
  },
  {
      name: 'Professional Card Designs',
      group: '16yo Priority',
      count: 5,
      quotes: [
          '"I\'d like something cleaner like solid colors, or something Premier League-themed or Champions League-themed"',
          '"The photo looks unnatural when put on the background"'
      ]
  },
  {
      name: 'Profile View Notifications',
      group: '16yo Priority',
      count: 4,
      quotes: [
          '"You should get notifications when someone views your profile"',
          '"What\'s missing: notifications about who views your profile"'
      ]
  }
];

// Assumption Validation Data
const assumptionValidationData = [
  {
      assumption: 'Youth players find the player card concept compelling',
      status: 'Validated',
      statusClass: 'bg-success',
      evidence: [
          '"I like the option to customize stuff" - Big 1',
          '"Making your own cards is cool" - Little 1',
          '"The player card idea is great" - Leo Martin'
      ],
      implications: 'Continue developing player card functionality as core platform feature'
  },
  {
      assumption: 'The user flow for creating player cards is intuitive and engaging',
      status: 'Partially Validated',
      statusClass: 'bg-warning',
      evidence: [
          '"Quick and easy process" - Little 4',
          '"Did not have to do a lot of steps to generate card" - Little 5',
          '"I didn\'t know if I should sign up or choose create a new card button" - Big 2'
      ],
      implications: 'Flow works but needs refinement; clearer pathways between card creation and account setup'
  },
  {
      assumption: 'Users would value and potentially purchase physical versions of their digital cards',
      status: 'Insufficient Data',
      statusClass: 'bg-secondary',
      evidence: [
          'One mention: "What I like: The bio, the achievement page, the discover other players, the fact you can order cards" - Big 2'
      ],
      implications: 'Need more direct questioning about physical card interest in future testing'
  },
  {
      assumption: 'Multi-sport athletes want a unified platform',
      status: 'Validated',
      statusClass: 'bg-success',
      evidence: [
          '"It\'s pretty important to be able to share all my sports on my profile, because otherwise I\'d have to only choose one" - Audio Big 1',
          '"We usually have one instagram page where I share all my sports clips" - Group'
      ],
      implications: 'Maintain focus on multi-sport support in platform development'
  },
  {
      assumption: 'Athletes want to share their athletic journey with friends and coaches',
      status: 'Age-Dependent',
      statusClass: 'bg-info',
      evidence: [
          '16yo: Focused on coach sharing',
          '13yo: Mixed on friend sharing',
          '"They would probably hate on me" - Littles Group'
      ],
      implications: 'Different sharing approaches needed for different age groups'
  },
  {
      assumption: 'Small communities can create sufficient engagement',
      status: 'Validated',
      statusClass: 'bg-success',
      evidence: [
          '"We\'d be interested in a feed - even if it was only soccer videos from my friends" - Group',
          '"If we were in a league or tournament, we would be more likely to post" - Audio Big 3'
      ],
      implications: 'Team-centric rollout strategy is viable'
  }
];

// Technical Issues Data
const technicalIssuesData = [
  {
      issue: 'Background removal issues',
      frequency: 'High (8+ mentions)',
      impact: 'High - affects core card appearance',
      evidence: [
          '"Backround remover is a little messed up and sometimes cuts off parts of the picture" - Big 1',
          '"It cut off my head or the whole photo" - Big 2'
      ],
      severity: 'danger'
  },
  {
      issue: 'Sign-up and verification process',
      frequency: 'High (6+ mentions)',
      impact: 'Critical - blocks user onboarding',
      evidence: [
          '"My phone doesn\'t get email so I wasn\'t able to get past sign up" - James Burrell',
          '"The sign in process was difficult and stressful. Many of us didn\'t get it to work" - Group'
      ],
      severity: 'danger'
  },
  {
      issue: 'Photo sizing/positioning issues',
      frequency: 'Medium (5 mentions)',
      impact: 'Medium - affects card quality',
      evidence: [
          '"I don\'t like how the photo covers the name and number of the player" - Graham Burrell',
          '"Sometimes the picture was too big for the card" - James Burrell'
      ],
      severity: 'warning'
  },
  {
      issue: 'Image rotation issues',
      frequency: 'Medium (3 mentions)',
      impact: 'Medium - affects user experience',
      evidence: [
          '"My photo kept going sideways [when uploading a photo for creating a player card]" - Little 2'
      ],
      severity: 'warning'
  },
  {
      issue: 'File size limitations',
      frequency: 'Low (2 mentions)',
      impact: 'Medium - prevents using preferred images',
      evidence: [
          '"I can\'t put certain images that I like because the file is too big" - Graham Burrell'
      ],
      severity: 'warning'
  }
];

// Raw quotes by category (for potential use in deeper analysis)
const insightfulQuotes = {
  cardDesign: [
      { quote: "I'd like something cleaner like solid colors, or something Premier League-themed or Champions League-themed", source: "James Burrell", age: 2012 },
      { quote: "I'd like to add a Lebron James background", source: "Audio Little 2", age: 2012 },
      { quote: "The player card option to upload our own photos is nice", source: "Cole N", age: 2009 }
  ],
  recruitment: [
      { quote: "I would imagine using the platform year round to show my performance to other coaches", source: "Audio Big 2", age: 2009 },
      { quote: "I think this is really cool because it makes you feel like a pro", source: "Jack R.", age: 2012 },
      { quote: "If a college coach was viewing my profile the first thing I would want them to see is my bio", source: "Audio Big 1", age: 2009 }
  ],
  socialFeatures: [
      { quote: "I don't think my friends would care about seeing my posts. They would probably hate on me", source: "Littles Group", age: 2012 },
      { quote: "We'd be interested in seeing posts from our soccer friends", source: "Littles Group", age: 2012 },
      { quote: "I guess I would share my profile with my friends, 'why not'", source: "Group", age: 2009 }
  ],
  videoHighlights: [
      { quote: "If I walked into an interview with a coach, the first thing I'm going to do is show them my highlights.", source: "Harrison Glover", age: 2012 },
      { quote: "There could also be a place where you can put your best plays/moments", source: "Leo Martin", age: 2009 },
      { quote: "There should be a place for highlights and full game films", source: "Leo Martin", age: 2009 }
  ]
};

// Sample raw feedback data (first 25 items)
// In production, this would be loaded from the CSV
const rawFeedbackDataSample = [
    { name: "Big 1", feedback: "Backround remover is a little messed up and sometimes cuts off parts of the picture.", source: "Written Feedback", type: "Bug", rating: 3, birthyear: 2009 },
    { name: "Big 1", feedback: "Sign up and log in are a bit broken", source: "Written Feedback", type: "Bug", rating: 2, birthyear: 2009 },
    { name: "Big 1", feedback: "I signed up and I could not log in after that. Had to use a new email but it worked", source: "Written Feedback", type: "Bug", rating: 2, birthyear: 2009 },
    { name: "Big 1", feedback: "I would be good if we could add a URL to our profile bios", source: "Written Feedback", type: "Enhancement", rating: 3, birthyear: 2009 },
    { name: "Big 1", feedback: "I like the option to customize stuff", source: "Written Feedback", type: "Feedback", rating: 3, birthyear: 2009 },
    { name: "Big 1", feedback: "Removing the background was a little broken and it ran a little slow", source: "Written Feedback", type: "Feedback", rating: 2, birthyear: 2009 },
    { name: "Big 1", feedback: "The URL was a bit hard to get into", source: "Written Feedback", type: "Feedback", rating: 2, birthyear: 2009 },
    { name: "Big 1", feedback: "I feel like adding clips is missing and like a way to share things", source: "Written Feedback", type: "Enhancement", rating: 3, birthyear: 2009 },
    { name: "Sinaly S.", feedback: "I think it's great, but it could be better.", source: "Written Feedback", type: "Feedback", rating: 1, birthyear: 2009 },
    { name: "Sinaly S.", feedback: "I think you guys should add highlights so other people can see what our strengths are.", source: "Written Feedback", type: "Feature Request", rating: 4, birthyear: 2009 },
    { name: "Sinaly S.", feedback: "I also think there should be like height and weight so coaches know how tall we are and choose the right prospect.", source: "Written Feedback", type: "Enhancement", rating: 4, birthyear: 2009 },
    { name: "Sinaly S.", feedback: "You guys should also add coaches from colleges so other prospects can see and message colleges.", source: "Written Feedback", type: "Feature Request", rating: 4, birthyear: 2009 },
    { name: "Sinaly S.", feedback: "I also like club soccer is really good but you guys should also add high school teams so coaches know where you are from", source: "Written Feedback", type: "Enhancement", rating: 4, birthyear: 2009 },
    { name: "Sinaly S.", feedback: "What did I like the most? I like the card idea and the bio so other players / coaches can see what your strengths and weaknesses are", source: "Written Feedback", type: "Feedback", rating: 4, birthyear: 2009 },
    { name: "Sinaly S.", feedback: "What didn't I like? I didn't like how there's no other examples or other real players you can see.", source: "Written Feedback", type: "Enhancement", rating: 3, birthyear: 2009 },
    { name: "Sinaly S.", feedback: "What was confusing? Nothing for me was really confusing", source: "Written Feedback", type: "Feedback", rating: 1, birthyear: 2009 },
    { name: "Sinaly S.", feedback: "What was missing? Adding scouts or coaches and links to message them.", source: "Written Feedback", type: "Feature Request", rating: 3, birthyear: 2009 },
    { name: "Big 2", feedback: "What I like: The bio, the achievement page, the discover other players, the fact you can order cards", source: "Written Feedback", type: "Feedback", rating: 2, birthyear: 2009 },
    { name: "Big 2", feedback: "What I didn't like: The background of the card", source: "Written Feedback", type: "Feedback", rating: 2, birthyear: 2009 },
    { name: "Big 2", feedback: "What I didn't like: the choosing photos process", source: "Written Feedback", type: "Feedback", rating: 2, birthyear: 2009 },
    { name: "Big 2", feedback: "What I didn't like: removing the background was buggy sometimes. It cut off my head or the whole photo.", source: "Written Feedback", type: "Feedback", rating: 3, birthyear: 2009 },
    { name: "Big 2", feedback: "What I thought was confusing: I didn't know if I should sign up or choose create a new card button", source: "Written Feedback", type: "Feedback", rating: 3, birthyear: 2009 },
    { name: "Big 2", feedback: "Idea: Be able to rotate player cards", source: "Written Feedback", type: "Enhancement", rating: 3, birthyear: 2009 },
    { name: "Big 2", feedback: "Idea: Shareable link", source: "Written Feedback", type: "Feature Request", rating: 3, birthyear: 2009 },
    { name: "Jayden", feedback: "Usually posts on Instagram about 3 times per year. He posts for coaches/recruiters, and for friends to see", source: "Observation", type: "General behavior", rating: "-", birthyear: 2009 },
    
    // Sample data from 13-year-olds
    { name: "Owen", feedback: "This is a nice easy accessible website. And very fun for me because now I get to keep track of my stats", source: "Written Feedback", type: "Feedback", rating: 2, birthyear: 2012 },
    { name: "Little 1", feedback: "I want to adjust the photos angle", source: "Written Feedback", type: "Enhancement", rating: 2, birthyear: 2012 },
    { name: "Little 1", feedback: "Image background remover isn't working", source: "Written Feedback", type: "Feedback", rating: 2, birthyear: 2012 },
    { name: "Little 1", feedback: "Slow", source: "Written Feedback", type: "Feedback", rating: 1, birthyear: 2012 },
    { name: "Little 1", feedback: "Make your own cards is cool", source: "Written Feedback", type: "Feedback", rating: 2, birthyear: 2012 },
    { name: "Little 2", feedback: "My photo kept going sideways [when uploading a photo for creating a player card]", source: "Written Feedback", type: "Feedback", rating: 2, birthyear: 2012 },
    { name: "Little 2", feedback: "What I liked: How we are able to put a bio in our card", source: "Written Feedback", type: "Feedback", rating: 2, birthyear: 2012 },
    { name: "Little 2", feedback: "What I didn't like: the player card backgrounds that were there", source: "Written Feedback", type: "Feedback", rating: 2, birthyear: 2012 },
    { name: "Little 2", feedback: "What was missing: It was missing was like a tik tok feature", source: "Written Feedback", type: "Feature Request", rating: 2, birthyear: 2012 },
    { name: "Little 3 (Nolan?)", feedback: "I would use the app but instead of email there should be a phone number [for signing up]", source: "Written Feedback", type: "Enhancement", rating: 3, birthyear: 2012 },
    { name: "Little 3 (Nolan?)", feedback: "What's missing: I think there should be videos you can scroll through", source: "Written Feedback", type: "Feature Request", rating: 3, birthyear: 2012 },
    { name: "Little 3 (Nolan?)", feedback: "What's missing: I think you should be able to make teams", source: "Written Feedback", type: "Feature Request", rating: 2, birthyear: 2012 },
    { name: "Little 4", feedback: "Background removal helped fit the picture", source: "Written Feedback", type: "Feedback", rating: 1, birthyear: 2012 },
    { name: "Little 4", feedback: "Cool options for background and frame", source: "Written Feedback", type: "Feedback", rating: 2, birthyear: 2012 }
];

const rawFeedbackData = [
  { name: "Big 1", feedback: "Backround remover is a little messed up and sometimes cuts off parts of the picture.", source: "Written Feedback", type: "Bug", rating: 3, takeaways: "Investigate", birthyear: 2009 },
  { name: "Big 1", feedback: "Sign up and log in are a bit broken", source: "Written Feedback", type: "Bug", rating: 2, takeaways: "Investigate", birthyear: 2009 },
  { name: "Big 1", feedback: "I signed up and I could not log in after that. Had to use a new email but it worked", source: "Written Feedback", type: "Bug", rating: 2, takeaways: "Investigate, but user could be referring to account on v1", birthyear: 2009 },
  { name: "Big 1", feedback: "I would be good if we could add a URL to our profile bios", source: "Written Feedback", type: "Enhancement", rating: 3, takeaways: "Add as enhancement request", birthyear: 2009 },
  { name: "Big 1", feedback: "I like the option to customize stuff", source: "Written Feedback", type: "Feedback", rating: 3, takeaways: "Customization = good!", birthyear: 2009 },
  { name: "Big 1", feedback: "Removing the background was a little broken and it ran a little slow", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "Investigate", birthyear: 2009 },
  { name: "Big 1", feedback: "The URL was a bit hard to get into", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "Add getting a new domain (i.e. product name change) as a Feature Request", birthyear: 2009 },
  { name: "Big 1", feedback: "I feel like adding clips is missing and like a way to share things", source: "Written Feedback", type: "Enhancement", rating: 3, takeaways: "Investigate how to make posting videos abundantly clear and easy. Explore sharing features", birthyear: 2009 },
  { name: "Sinaly S.", feedback: "I think it's great, but it could be better.", source: "Written Feedback", type: "Feedback", rating: 1, takeaways: "", birthyear: 2009 },
  { name: "Sinaly S.", feedback: "I think you guys should add highlights so other people can see what our strengths are.", source: "Written Feedback", type: "Feature Request", rating: 4, takeaways: "", birthyear: 2009 },
  { name: "Sinaly S.", feedback: "I also think there should be like height and weight so coaches know how tall we are and choose the right prospect.", source: "Written Feedback", type: "Enhancement", rating: 4, takeaways: "", birthyear: 2009 },
  { name: "Sinaly S.", feedback: "You guys should also add coaches from colleges so other prospects can see and message colleges.", source: "Written Feedback", type: "Feature Request", rating: 4, takeaways: "", birthyear: 2009 },
  { name: "Sinaly S.", feedback: "I also like club soccer is really good but you guys should also add high school teams so coaches know where you are from", source: "Written Feedback", type: "Enhancement", rating: 4, takeaways: "My interpretation is Sinaly would like High School teams to be differentiated from Club Teams. Paula thinks it's that HS teams give you more info on where the player is from", birthyear: 2009 },
  { name: "Sinaly S.", feedback: "What did I like the most? I like the card idea and the bio so other players / coaches can see what your strengths and weaknesses are", source: "Written Feedback", type: "Feedback", rating: 4, takeaways: "", birthyear: 2009 },
  { name: "Sinaly S.", feedback: "What didn't I like? I didn't like how there's no other examples or other real players you can see.", source: "Written Feedback", type: "Enhancement", rating: 3, takeaways: "Sinaly would like to see real examples of real players. Perhaps this means real examples on the homepage, or actual users he can connect to once he's on the platform", birthyear: 2009 },
  { name: "Sinaly S.", feedback: "What was confusing? Nothing for me was really confusing", source: "Written Feedback", type: "Feedback", rating: 1, takeaways: "", birthyear: 2009 },
  { name: "Sinaly S.", feedback: "What was missing? Adding scouts or coaches and links to message them.", source: "Written Feedback", type: "Feature Request", rating: 3, takeaways: "", birthyear: 2009 },
  { name: "Big 2", feedback: "What I like: The bio, the achievement page, the discover other players, the fact you can order cards", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2009 },
  { name: "Big 2", feedback: "What I didn't like: The background of the card", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2009 },
  { name: "Big 2", feedback: "What I didn't like: the choosing photos process", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2009 },
  { name: "Big 2", feedback: "What I didn't like: removing the background was buggy sometimes. It cut off my head or the whole photo.", source: "Written Feedback", type: "Feedback", rating: 3, takeaways: "", birthyear: 2009 },
  { name: "Big 2", feedback: "What I thought was confusing: I didn't know if I should sign up or choose create a new card button", source: "Written Feedback", type: "Feedback", rating: 3, takeaways: "", birthyear: 2009 },
  { name: "Big 2", feedback: "Idea: Be able to rotate player cards", source: "Written Feedback", type: "Enhancement", rating: 3, takeaways: "", birthyear: 2009 },
  { name: "Big 2", feedback: "Idea: Shareable link", source: "Written Feedback", type: "Feature Request", rating: 3, takeaways: "", birthyear: 2009 },
  { name: "Jayden", feedback: "Usually posts on Instagram about 3 times per year. He posts for coaches/recruiters, and for friends to see", source: "Observation", type: "General behavior", rating: "-", takeaways: "", birthyear: 2009 },
  { name: "Jandro Doe", feedback: "Thinks it is cool because there is no obligation", source: "Observation", type: "Feedback", rating: 2, takeaways: "", birthyear: 2009 },
  { name: "Jandro Doe", feedback: "Faced confusion with sign up process", source: "Observation", type: "Feedback", rating: 2, takeaways: "", birthyear: 2009 },
  { name: "Jandro Doe", feedback: "Thinks its straight forward and would definitely use and would show friends", source: "Observation", type: "Feedback", rating: 2, takeaways: "", birthyear: 2009 },
  { name: "Jandro Doe", feedback: "Likes the backgrounds but would like more variety", source: "Observation", type: "Feedback", rating: 3, takeaways: "", birthyear: 2009 },
  { name: "Jandro Doe", feedback: "Does post on instagram", source: "Observation", type: "General behavior", rating: "-", takeaways: "", birthyear: 2009 },
  { name: "Jandro Doe", feedback: "Only good thoughts", source: "Observation", type: "Feedback", rating: 1, takeaways: "", birthyear: 2009 },
  { name: "Graham Burrell", feedback: "I like how the player card creator is easily accessible. I like how you can personally customize the player card.", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2009 },
  { name: "Graham Burrell", feedback: "I don't like how the photo covers the name and number of the player", source: "Written Feedback", type: "Feedback", rating: 3, takeaways: "", birthyear: 2009 },
  { name: "Graham Burrell", feedback: "I like how it is easy to claim and get your player card once its generated", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2009 },
  { name: "Graham Burrell", feedback: "Its nice that you can add traits, skills, a bio, and positions that people can see when they go to the card.", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2009 },
  { name: "Graham Burrell", feedback: "Maybe there could be different designs about where you can put your name, number and photo instead of all of it being stacked together", source: "Written Feedback", type: "Enhancement", rating: 3, takeaways: "", birthyear: 2009 },
  { name: "Graham Burrell", feedback: "I like how you can also add different teams you've been on and your achievements", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2009 },
  { name: "Graham Burrell", feedback: "Overalll the menu is easily accessible and easy to navigate", source: "Written Feedback", type: "Feedback", rating: 1, takeaways: "", birthyear: 2009 },
  { name: "Graham Burrell", feedback: "The photo looks unnatural when put on the background", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2009 },
  { name: "Graham Burrell", feedback: "I like how the website has a news page theat keeps up with new updates", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2009 },
  { name: "Graham Burrell", feedback: "I did not see that you could remove the image background my bad", source: "Written Feedback", type: "Feedback", rating: 3, takeaways: "", birthyear: 2009 },
  { name: "Graham Burrell", feedback: "I can't put certain images that I like because the file is too big", source: "Written Feedback", type: "Feedback", rating: 3, takeaways: "", birthyear: 2009 },
  { name: "Graham Burrell", feedback: "Some photos I cannot remove the background", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2009 },
  { name: "Graham Burrell", feedback: "Some photos I still cannot use after removing the background because it blocks my player number.", source: "Written Feedback", type: "Feedback", rating: 3, takeaways: "", birthyear: 2009 },
  { name: "Graham Burrell", feedback: "I like the about page that tells what you are trying to do and help us with our career. Great conversation and communication", source: "Written Feedback", type: "Feedback", rating: 3, takeaways: "", birthyear: 2009 },
  { name: "Graham Burrell", feedback: "What I like: How easy the website is to use", source: "Written Feedback", type: "Feedback", rating: 1, takeaways: "", birthyear: 2009 },
  { name: "Graham Burrell", feedback: "What I don't like: some images can't be used or the background taken out", source: "Written Feedback", type: "Bug", rating: 2, takeaways: "", birthyear: 2009 },
  { name: "Graham Burrell", feedback: "What was confusing: What to put in the bio section", source: "Written Feedback", type: "Feedback", rating: 3, takeaways: "", birthyear: 2009 },
  { name: "Graham Burrell", feedback: "What's missing: notifications about who views your profile", source: "Written Feedback", type: "Feature Request", rating: 3, takeaways: "", birthyear: 2009 },
  { name: "Leo Martin", feedback: "The player card idea is great especially if colleges can see and browse our best plays and profile from the card", source: "Written Feedback", type: "Feedback", rating: 3, takeaways: "", birthyear: 2009 },
  { name: "Leo Martin", feedback: "I also like how much you are able to add to the profile (bio, position, skills, background, etc)", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2009 },
  { name: "Leo Martin", feedback: "[The quality of videos on my profile] all comes down to the camera quality, and these colleges should be able to have a clear view on the players we are making. As long as the quality of the camera is reasonable I am all for the program.", source: "Written Feedback", type: "Feedback", rating: 1, takeaways: "Camera quality is a problem we have decided we cannot solve at this stage. However, it's good to understand how players feel about this. But in this case, I suspect Leo's sentiment was biased by his feelings towards AthletiFi V1.", birthyear: 2009 },
  { name: "Leo Martin", feedback: "This player card is a great idea as it will separate you form the different companies such as Veo and Trace. Just need to make sure you have the fundamentals so that this program can compete with the best.", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "We are more interested in players' own feelings about the platform. Is the player card being a differentiator appealing to Leo as a user?", birthyear: 2009 },
  { name: "Leo Martin", feedback: "I am not sure how stats are tracked but that is a great idea as well.", source: "Written Feedback", type: "Feedback", rating: 1, takeaways: "Automated stats is a problem we have decided we cannot solve at this stage. However, it's good to understand how players feel about this. But in this case, I suspect Leo's sentiment was biased by his feelings towards AthletiFi V1. ", birthyear: 2009 },
  { name: "Leo Martin", feedback: "There could also be a place where you can put your best plays/moments if there is not already", source: "Written Feedback", type: "Feature Request", rating: 3, takeaways: "", birthyear: 2009 },
  { name: "Leo Martin", feedback: "Overall, I love the idea of the program and it will only get better as you guys can improve on your flaws", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2009 },
  { name: "Leo Martin", feedback: "What I liked the most: the variety of things on the profile such as player card, bio, positions and skills", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2009 },
  { name: "Leo Martin", feedback: "What I disliked: not much but I don't know if there is a place for highlights, stats, etc, but that would be peak", source: "Written Feedback", type: "Feature Request", rating: 3, takeaways: "This is not a specific feature request, but he is suggesting several things that will funnel into feature consideration", birthyear: 2009 },
  { name: "Leo Martin", feedback: "What is confusing: Where will the full game videos be and where can I send this to college coaches and my friends...What is missing? Definitely need a place for highlights and full game films.", source: "Written Feedback", type: "Feature Request", rating: 4, takeaways: "He alludes to wanting to send this to college coaches and friends, which is an important motivator to take note of", birthyear: 2009 },
  { name: "Leo Martin", feedback: "What is confusing: What is the skills sections, is it like hashtags?", source: "Written Feedback", type: "Feedback", rating: 3, takeaways: "We need to rethink this section, or add more clarity to how it should be thought about.", birthyear: 2009 },
  { name: "Leo Martin", feedback: "What is missing: Also could be a group chat for the team and individual coach to player texts", source: "Written Feedback", type: "Feature Request", rating: 3, takeaways: "", birthyear: 2009 },
  { name: "Kelyn Littlewood", feedback: "Website is very easy to use.", source: "Written Feedback", type: "Feedback", rating: 1, takeaways: "", birthyear: 2009 },
  { name: "Kelyn Littlewood", feedback: "When designing the card the photos look very unnatural compared to the background", source: "Written Feedback", type: "Feedback", rating: 3, takeaways: "What if we automatically enhanced photos during the card creation process?", birthyear: 2009 },
  { name: "Kelyn Littlewood", feedback: "Photos covers your name on the card", source: "Written Feedback", type: "Feedback", rating: 3, takeaways: "Name can be made to go in front of player image?", birthyear: 2009 },
  { name: "Kelyn Littlewood", feedback: "Nevermind found remove image background", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "It sounds like this player had trouble finding this button at first, which we should take note of", birthyear: 2009 },
  { name: "Kelyn Littlewood", feedback: "What I liked the most: designing the card and website use was easy", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2009 },
  { name: "Kelyn Littlewood", feedback: "What I didn't like - not your fault - soccer isn't my main sport so I don't plan on playing in college so I wasn't very engaged. Play soccer for fun.", source: "Written Feedback", type: "Feedback", rating: 4, takeaways: "This is actually very interesting to hear, as ultimately we want casual players to be engaged by the platform as well. What can we do for players uninterested in the recruiting aspects? My initial thought is gamification", birthyear: 2009 },
  { name: "Kelyn Littlewood", feedback: "What I found confusing: I had trouble with importing the photo to the card", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2009 },
  { name: "Kelyn Littlewood", feedback: "What was missing? More card customization", source: "Written Feedback", type: "Enhancement", rating: 3, takeaways: "", birthyear: 2009 },
  { name: "Cole N", feedback: "The player card option to upload our own photos is nice", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2009 },
  { name: "Cole N", feedback: "What I liked: the custom photos and the bio feature was easily accessible", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2009 },
  { name: "Cole N", feedback: "What I didn't like: the photo limitation doesn't put a step after saving to crop it, or to choose a different photo", source: "Written Feedback", type: "Enhancement", rating: 3, takeaways: "", birthyear: 2009 },
  { name: "Cole N", feedback: "What I found confusing: The email part was a tiny bit confusing, but nothing else.", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2009 },
  { name: "Cole N", feedback: "What is missing: Stats section", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2009 },
  { name: "Cole N", feedback: "What is missing: clips/highlights", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "So many players suggesting that clips are missing leads me to believe that it is not clear that the  achievements section is meant for posting videos", birthyear: 2009 },
  { name: "Cole N", feedback: "What is missing: adding links to bio, and a link in other player profiles to see their bio", source: "Written Feedback", type: "Enhancement", rating: 2, takeaways: "\"link in other player profiles\" might be suggesting we should have a short bio for each player in the player discovery section, perhaps ai summaries of that players' bio/about me section", birthyear: 2009 },
  { name: "Owen", feedback: "This is a nice easy accessible website. And very fun for me because now I get to keep track of my stats", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2012 },
  { name: "Little 1", feedback: "I want to adjust the photos angle", source: "Written Feedback", type: "Enhancement", rating: 2, takeaways: "", birthyear: 2012 },
  { name: "Little 1", feedback: "Image background remover isn't working", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2012 },
  { name: "Little 1", feedback: "Slow", source: "Written Feedback", type: "Feedback", rating: 1, takeaways: "", birthyear: 2012 },
  { name: "Little 1", feedback: "Make your own cards is cool", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2012 },
  { name: "Little 2", feedback: "My photo kept going sideways [when uploading a photo for creating a player card]", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2012 },
  { name: "Little 2", feedback: "What I liked: How we are able to put a bio in our card", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2012 },
  { name: "Little 2", feedback: "What I didn't like: the player card backgrounds that were there", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "My interpretation is this player would like different background designs", birthyear: 2012 },
  { name: "Little 2", feedback: "What was missing: It was missing was like a tik tok feature", source: "Written Feedback", type: "Feature Request", rating: 2, takeaways: "Perhaps this player is referring to a scrollable feed of videos? This is what came up in the group discussion", birthyear: 2012 },
  { name: "Little 3 (Nolan?)", feedback: "I would use the app but instead of email there should be a phone number [for signing up]", source: "Written Feedback", type: "Enhancement", rating: 3, takeaways: "", birthyear: 2012 },
  { name: "Little 3 (Nolan?)", feedback: "What's missing: I think there should be videos you can scroll through", source: "Written Feedback", type: "Feature Request", rating: 3, takeaways: "", birthyear: 2012 },
  { name: "Little 3 (Nolan?)", feedback: "What's missing: I think you should be able to make teams", source: "Written Feedback", type: "Feature Request", rating: 2, takeaways: "", birthyear: 2012 },
  { name: "Little 4", feedback: "Background removal helped fit the picture", source: "Written Feedback", type: "Feedback", rating: 1, takeaways: "", birthyear: 2012 },
  { name: "Little 4", feedback: "Cool options for background and frame", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2012 },
  { name: "Little 4", feedback: "Quick and easy process", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2012 },
  { name: "Little 4", feedback: "Sign up process for account takes a while", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2012 },
  { name: "Little 4", feedback: "Date of birth should be easier to change", source: "Written Feedback", type: "Feedback", rating: 3, takeaways: "", birthyear: 2012 },
  { name: "Little 4", feedback: "I thought some of the sign up options were confusing", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2012 },
  { name: "Little 4", feedback: "I think they should add highlights or video reel", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2012 },
  { name: "Jack R.", feedback: "This platform is effortless and enjoyable. I say this because it is easy to design and personalize your profile, which is very beneficial to displaying your stats.", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2012 },
  { name: "Jack R.", feedback: "I think this is really cool because it makes you feel like a pro. Because when someone asks for your stats you can just show them this.", source: "Written Feedback", type: "Feedback", rating: 3, takeaways: "Jack likes feeling like a pro", birthyear: 2012 },
  { name: "Harrison Glover", feedback: "Photos should be cropped to fit the size of the card", source: "Written Feedback", type: "Enhancement", rating: 2, takeaways: "", birthyear: 2012 },
  { name: "Harrison Glover", feedback: "More cards would be cool", source: "Written Feedback", type: "Enhancement", rating: 2, takeaways: "", birthyear: 2012 },
  { name: "Harrison Glover", feedback: "Following system where you can follow others", source: "Written Feedback", type: "Feature Request", rating: 2, takeaways: "Harrison said this during the group discussion as well", birthyear: 2012 },
  { name: "Harrison Glover", feedback: "Login / signup is confusing", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2012 },
  { name: "Harrison Glover", feedback: "A feed like insta would be cool", source: "Written Feedback", type: "Feature Request", rating: 2, takeaways: "", birthyear: 2012 },
  { name: "Little 5", feedback: "Very simple and easy to get on", source: "Written Feedback", type: "Feedback", rating: 1, takeaways: "", birthyear: 2012 },
  { name: "Little 5", feedback: "A lot of different backgrounds for your card", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2012 },
  { name: "Little 5", feedback: "Did not have to do a lot of steps to generate card", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2012 },
  { name: "Little 6", feedback: "What I found confusing/what I disliked: It was kinda hard to set up but its [easy?] after you figure it out", source: "Written Feedback", type: "Feedback", rating: 1, takeaways: "", birthyear: 2012 },
  { name: "Little 6", feedback: "What's missing: There should be a way where you can like add your card to FIFA team", source: "Written Feedback", type: "Feature Request", rating: 2, takeaways: "I am not sure what this player meant, but its an intriguing idea", birthyear: 2012 },
  { name: "Little 6", feedback: "What's missing: you should make a way to use AI to make cards", source: "Written Feedback", type: "Feature Request", rating: 2, takeaways: "Interesting ID, but I would be interested in knowing WHY this player wants AI. To make it faster? Add  more variation? Have more control over the design?", birthyear: 2012 },
  { name: "Little 6", feedback: "What I liked: The actual player cards", source: "Written Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2012 },
  { name: "Harrison Glover", feedback: "I got to the point where I can make the account but I had to use a six digit thing, So when I closed out of the tab to go to it, it completely  logged me out it and now it says user does not exist", source: "Group Discussion Feedback", type: "Bug", rating: 4, takeaways: "", birthyear: 2012 },
  { name: "Harrison Glover", feedback: "What I liked: Being able to use my own picture for the player cards", source: "Group Discussion Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2012 },
  { name: "Audio Little 2", feedback: "What I liked: Being able to add a bio", source: "Group Discussion Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2012 },
  { name: "James Burrell", feedback: "My phone doesn't get email so I wasn't able to get past sign up", source: "Group Discussion Feedback", type: "Feedback", rating: 3, takeaways: "For younger kids, we'll need to come up with non-email methods for sign up, or alternative verification methods", birthyear: 2012 },
  { name: "Nolan", feedback: "I'd like to be able to follow other people, such as my friends and teammates", source: "Group Discussion Feedback", type: "Feature Request", rating: 3, takeaways: "", birthyear: 2012 },
  { name: "Audio Little 3", feedback: "I like having the ability to add my position and what teams I played for", source: "Group Discussion Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2012 },
  { name: "Littles Group", feedback: "People such as grandparents and scouts would want to see my profile. Soccer friends to (prompted)", source: "Group Discussion Feedback", type: "General behavior", rating: "-", takeaways: "", birthyear: 2012 },
  { name: "James Burrell", feedback: "I maybe would want to see photos posted by my friends", source: "Group Discussion Feedback", type: "Feedback", rating: 2, takeaways: "Sounded unconvinced", birthyear: 2012 },
  { name: "Littles Group", feedback: "We'd be interested in seeing posts from our soccer friends. Maybe friends in other sports, but not sure", source: "Group Discussion Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2012 },
  { name: "Littles Group", feedback: "I don't think my friends would care about seeing my posts. They would probably hate on me", source: "Group Discussion Feedback", type: "Feedback", rating: 3, takeaways: "", birthyear: 2012 },
  { name: "Littles Group", feedback: "We don't care if our youth coaches see our posts, but we do care if college coaches and scouts see our profile", source: "Group Discussion Feedback", type: "Feedback", rating: 3, takeaways: "", birthyear: 2012 },
  { name: "Littles Group", feedback: "If college coaches were viewing our profiles, we would definitely make sure we only showed the best content. Because we don't want to embarrass ourselves (Nolan) and we want to make the best impression.", source: "Group Discussion Feedback", type: "Feedback", rating: 4, takeaways: "", birthyear: 2012 },
  { name: "James Burrell", feedback: "Sometimes the picture was too big for the card", source: "Group Discussion Feedback", type: "Enhancement", rating: 2, takeaways: "", birthyear: 2012 },
  { name: "James Burrell", feedback: "I liked the player cards but some of the backgrounds are a little cheesy. I'd like something cleaner like solid colors, or something Premier League-themed or Champions League-themed", source: "Group Discussion Feedback", type: "Enhancement", rating: 4, takeaways: "", birthyear: 2012 },
  { name: "Audio Little 4", feedback: "I didn't like how we had to log in like 5 times I feel like it would be easier if it was just an app you can download and sign in once and be done with it.", source: "Group Discussion Feedback", type: "Feature Request", rating: 2, takeaways: "", birthyear: 2012 },
  { name: "Group", feedback: "The sign in process was difficult and stressful. Many of us didn't get it to work", source: "Group Discussion Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2012 },
  { name: "Audio Little 3 (Maybe same as Little 6)", feedback: "I don't like how anyone can view my profile. I would like to be able to set it to private or public, or only have certain types of people be able to view my profile", source: "Group Discussion Feedback", type: "Feature Request", rating: 3, takeaways: "", birthyear: 2012 },
  { name: "Audio Little 3 (Maybe same as Little 6)", feedback: "Maybe you could add your picture and then use AI to generate the rest of the card", source: "Group Discussion Feedback", type: "Feature Request", rating: 2, takeaways: "", birthyear: 2012 },
  { name: "Audio Little 2", feedback: "I'd like to add a Lebron James background", source: "Group Discussion Feedback", type: "Enhancement", rating: 2, takeaways: "My takeaway is we need more sports themed backgrounds", birthyear: 2012 },
  { name: "Audio Little 4 (Maybe same as Little 2)", feedback: "It would be cool if like you had a TikTok part of it where you could just scroll and there'd just be like all kinds of videos. Like a feed", source: "Group Discussion Feedback", type: "Feature Request", rating: 3, takeaways: "", birthyear: 2012 },
  { name: "Group", feedback: "We'd be interested in a feed - even if it was only soccer videos from my friends. That would be fun", source: "Group Discussion Feedback", type: "Feature Request", rating: 3, takeaways: "", birthyear: 2012 },
  { name: "Group", feedback: "The card collection for followers concept is good", source: "Group Discussion Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2012 },
  { name: "Audio Little 2", feedback: "I used to trade soccer cards. But no one really trades them anymore. I was like 10 when I traded them.", source: "Group Discussion Feedback", type: "General behavior", rating: "-", takeaways: "", birthyear: 2012 },
  { name: "James Burrell", feedback: "There's a game called Madfut. It's kind of like a pack opening game. (several players said they love Mad Foot upon this suggestion)", source: "Group Discussion Feedback", type: "General behavior", rating: "-", takeaways: "", birthyear: 2012 },
  { name: "Group", feedback: "We all love Mad fut.", source: "Group Discussion Feedback", type: "General behavior", rating: "-", takeaways: "", birthyear: 2012 },
  { name: "Audio Little 4 (Maybe same as Little 2)", feedback: "You should have an option where you can make your own lineup with you and your friends' cards.", source: "Group Discussion Feedback", type: "Feature Request", rating: 2, takeaways: "", birthyear: 2012 },
  { name: "Audio Little 4 (Maybe same as Little 2)", feedback: "In FIFA mobile you get to design your own teams, and you can get rid of people but you can also buy new cards.", source: "Group Discussion Feedback", type: "Feature Request", rating: 2, takeaways: "", birthyear: 2012 },
  { name: "Audio Little 3 (Maybe same as Little 6)", feedback: "You can add your own team as like a FIFA card and then face off against other teams. And be able to see your teams chemistry and stuff.", source: "Group Discussion Feedback", type: "Feature Request", rating: null, takeaways: "", birthyear: 2012 }, // Rating was empty in CSV
  { name: "Group", feedback: "We would probably post about 1-2 times per week", source: "Group Discussion Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2012 },
  { name: "Group", feedback: "We post on other social media once every other week", source: "Group Discussion Feedback", type: "General behavior", rating: "-", takeaways: "", birthyear: 2012 },
  { name: "Audio Little 2", feedback: "If I'm following something on TikTok, like the Tim Cheese and John Pork lore I'll post about that. Or stuff that's going on, like if one of my teams makes it to the finals", source: "Group Discussion Feedback", type: "General behavior", rating: "-", takeaways: "", birthyear: 2012 },
  { name: "Audio Little 4 (Maybe same as Little 2)", feedback: "The first thing I would want either a coach or friend to know about me as an athlete is my play style, my position, my positive and negative traits.", source: "Group Discussion Feedback", type: "General behavior", rating: "-", takeaways: "", birthyear: 2012 },
  { name: "Nolan", feedback: "The first thing I would want either a coach or friend to know about me is my stats, pass percentages, etc", source: "Group Discussion Feedback", type: "General behavior", rating: "-", takeaways: "", birthyear: 2012 },
  { name: "Harrison Glover", feedback: "If I walked into an interview with a coach, the first thing I'm going to do is show them my highlights.", source: "Group Discussion Feedback", type: "General behavior", rating: "-", takeaways: "", birthyear: 2012 },
  { name: "Audio Big1", feedback: "I think it's cool that you can upload your own photo", source: "Group Discussion Feedback", type: "Feedback", rating: null, takeaways: "", birthyear: 2009 }, // Rating was empty in CSV
  { name: "Audio Big1", feedback: "I took a new photo, and it worked right away, I also removed the background", source: "Group Discussion Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2009 },
  { name: "Group", feedback: "Most of us found our favorite photo from our library, and he did not have many issues with removing the background", source: "Group Discussion Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2009 },
  { name: "Audio Big2", feedback: "I liked the Bio. I liked the idea of colleges being able to see it.", source: "Group Discussion Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2009 },
  { name: "Audio Big2", feedback: "I was stuck on what to put on my Bio", source: "Group Discussion Feedback", type: "Feedback", rating: 3, takeaways: "", birthyear: 2009 },
  { name: "Audio Big3", feedback: "I got confused by the photo upload process. The size limitation was frustrating. I just went through enough photos until I found one that worked.", source: "Group Discussion Feedback", type: "Feedback", rating: 3, takeaways: "", birthyear: 2009 },
  { name: "Audio Big4", feedback: "Sometimes the background removal process didn't work if I was too  far away", source: "Group Discussion Feedback", type: "Feedback", rating: 3, takeaways: "", birthyear: 2009 },
  { name: "Group", feedback: "The email part was really easy. It came straight to our email", source: "Group Discussion Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2009 },
  { name: "Audio Big2", feedback: "Phone number log in could be helpful but should be optional", source: "Group Discussion Feedback", type: "Enhancement", rating: 3, takeaways: "", birthyear: 2009 },
  { name: "Audio Big1", feedback: "I would like to be able to change where I put my number or my name on the card.", source: "Group Discussion Feedback", type: "Enhancement", rating: 3, takeaways: "", birthyear: 2009 },
  { name: "Group", feedback: "About half the group play on multiple soccer teams", source: "Group Discussion Feedback", type: "General behavior", rating: "-", takeaways: "", birthyear: 2009 },
  { name: "Group", feedback: "About half the group plays multiple sports", source: "Group Discussion Feedback", type: "General behavior", rating: "-", takeaways: "", birthyear: 2009 },
  { name: "Audio Big2", feedback: "I would imagine using the platform year round to show my performance to other coaches to help me improve as a player", source: "Group Discussion Feedback", type: "Feedback", rating: 4, takeaways: "", birthyear: 2009 },
  { name: "Audio Big3", feedback: "I would be interested in showing my highlights to my friends", source: "Group Discussion Feedback", type: "Feedback", rating: 3, takeaways: "", birthyear: 2009 },
  { name: "Audio Big2", feedback: "There should be a place where you can put your best clips, especially for colleges to see quickly when browsing your profile", source: "Group Discussion Feedback", type: "Feature Request", rating: 3, takeaways: "", birthyear: 2009 },
  { name: "Audio Big1", feedback: "Connecting with other players from other sports \"could be something\"", source: "Group Discussion Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2009 },
  { name: "Audio Big3", feedback: "Being able to keep adding highlights after each game will get my to log into the platform more", source: "Group Discussion Feedback", type: "Feedback", rating: 4, takeaways: "The easier we can make it to load highlights into their profile, the more they will log onto the platform.", birthyear: 2009 },
  { name: "Sinaly", feedback: "There should be a way to keep track of which college coaches you're sending highlights to.", source: "Group Discussion Feedback", type: "Feature Request", rating: 3, takeaways: "", birthyear: 2009 },
  { name: "Audio Big2", feedback: "You should get notifications when someone views your profile, whether it is a coach or another player", source: "Group Discussion Feedback", type: "Feature Request", rating: 3, takeaways: "", birthyear: 2009 },
  { name: "Audio Big1", feedback: "If a college coach sees something they like from your profile, you should be notified that they looked at that, and there should be an ability for them to comment and make suggestions, and then allow you to add or send a new clip after incorporating their suggestions to show how you've improved", source: "Group Discussion Feedback", type: "Feature Request", rating: 4, takeaways: "", birthyear: 2009 },
  { name: "Group", feedback: "Some of us use Instagram and some of us use Youtube to share our soccer clips and highlights", source: "Group Discussion Feedback", type: "General behavior", rating: "-", takeaways: "", birthyear: 2009 },
  { name: "Audio Big4", feedback: "I don't share clips on my instagram, because those are not highlights that I want there", source: "Group Discussion Feedback", type: "General behavior", rating: "-", takeaways: "", birthyear: 2009 },
  { name: "Audio Big1", feedback: "I just went to an ID Camp and needed to use youtube to send my highlights out", source: "Group Discussion Feedback", type: "General behavior", rating: "-", takeaways: "", birthyear: 2009 },
  { name: "Group", feedback: "I guess I would share my profile with my friends, \"why not\".", source: "Group Discussion Feedback", type: "Feedback", rating: 3, takeaways: "They didn't seem like they cared too much about sharing with friends", birthyear: 2009 },
  { name: "Audio Big3", feedback: "If we were in a league or tournament, we would be more likely to post", source: "Group Discussion Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2009 },
  { name: "Audio Big3", feedback: "The first thing I would want people to know about my as an athlete is my play-style and my attitude. Personally I'm positive towards my teammates.", source: "Group Discussion Feedback", type: "Feedback", rating: 4, takeaways: "This is interesting because we also heard this interest in this from college coaches. They told us that they're intested in learning about a player's passion and drive, which they only really know how to get from watching the player in person on the field, and paying attention to their behavior outside of their skill", birthyear: 2009 },
  { name: "Audio Big2", feedback: "I think you should be able to give a rating to your teammates on their play-style and attitude \"Like back them up on it\"", source: "Group Discussion Feedback", type: "Feature Request", rating: 4, takeaways: "This is similar to the endorsements feature on LinkedIn, and is something we've discussed ourselves.", birthyear: 2009 },
  { name: "Audio Big1", feedback: "If there's a play that involves multiple players, there should be a way to tage them, and then a group chat function where those players can talk about what they can do better for next time", source: "Group Discussion Feedback", type: "Feature Request", rating: 4, takeaways: "", birthyear: 2009 },
  { name: "Group", feedback: "We'd be interested in showing college coaches are other interests and achievements outside of soccer, because we know that college coaches want you more if you show you're a high achiever outside of sports", source: "Group Discussion Feedback", type: "Feedback", rating: 3, takeaways: "", birthyear: 2009 },
  { name: "Audio Big2", feedback: "It would be cool to be able to show \"side achievements\" like I volunteer for charity", source: "Group Discussion Feedback", type: "Feature Request", rating: 3, takeaways: "", birthyear: 2009 },
  { name: "Audio Big1", feedback: "A good player profile is complete and has everything filled out, has a good explanation of how that player plays and who they are, and shows a diversity of their skills within their position, such as slide tackling, shooting, etc.", source: "Group Discussion Feedback", type: "Feedback", rating: 4, takeaways: "", birthyear: 2009 },
  { name: "Audio Big2", feedback: "If you're an attacker, shots on goal and assists are the important stats to me. If you're a defender, Tackles", source: "Group Discussion Feedback", type: "Feedback", rating: 2, takeaways: "", birthyear: 2009 },
  { name: "Audio Big1", feedback: "We mostly only play one position, but if we do play a second position they're usually similar. Like winger and attacking mid because they're both attacking positions", source: "Group Discussion Feedback", type: "General behavior", rating: "-", takeaways: "", birthyear: 2009 },
  { name: "Audio Big1", feedback: "If a college coach was viewing my profile the first thing I would want them to see is my bio explaining who I am and how I play my game, and then my highlights and clips. See who I am, then see me play.", source: "Group Discussion Feedback", type: "General behavior", rating: "-", takeaways: "Everyone sounded like they agreed", birthyear: 2009 },
  { name: "Audio Big2", feedback: "If a college coach was viewing my profile I'd want them to see my bio first because most coaches have a clear idea of what they're looking for in a player. If your bio doesn't match, they'll move on quickly, but if it aligns with their criteria, it can break through their initial assumptions and make them interested in exploring further.", source: "Group Discussion Feedback", type: "General behavior", rating: "-", takeaways: "", birthyear: 2009 },
  { name: "Audio Big3", feedback: "I think coaches should first see our bio to quickly understand who we are as players. From there, they can view one or two highlight clips, and if they're interested, they can dive deeper into our profile.", source: "Group Discussion Feedback", type: "Feature Request", rating: 4, takeaways: "", birthyear: 2009 },
  { name: "Group", feedback: "Some of us also play golf, lacrosse, track and field.", source: "Group Discussion Feedback", type: "General behavior", rating: "-", takeaways: "", birthyear: 2009 },
  { name: "Group", feedback: "We usually have one instagram page where I share all my sports clips, even if they are from different sports", source: "Group Discussion Feedback", type: "General behavior", rating: "-", takeaways: "", birthyear: 2009 },
  { name: "Audio Big1", feedback: "It's pretty important to be able to share all my sports on my profile, because otherwise I'd have to only choose one", source: "Group Discussion Feedback", type: "Feedback", rating: 3, takeaways: "", birthyear: 2009 }
];