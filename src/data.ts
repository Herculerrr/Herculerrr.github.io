export type Skill = 'Reception' | 'Production' | 'Interaction' | 'Mediation'

export const words = [
  { word: 'eloquent', phonetic: '/ˈeləkwənt/', meaning: '表达清晰而有说服力的', example: 'She gave an eloquent account of the journey.', skill: 'Production' as Skill, level: 'B2' },
  { word: 'deliberate', phonetic: '/dɪˈlɪbərət/', meaning: '有意识的；经过思考的', example: 'Deliberate practice turns mistakes into progress.', skill: 'Production' as Skill, level: 'B1' },
  { word: 'nuance', phonetic: '/ˈnuːɑːns/', meaning: '细微差别；微妙之处', example: 'Good listeners notice every nuance in a conversation.', skill: 'Reception' as Skill, level: 'B2' },
  { word: 'resilient', phonetic: '/rɪˈzɪliənt/', meaning: '有韧性的；能迅速恢复的', example: 'A resilient learner returns to the work tomorrow.', skill: 'Interaction' as Skill, level: 'B1' },
  { word: 'coherent', phonetic: '/kəʊˈhɪərənt/', meaning: '连贯的；条理清楚的', example: 'Try to build one coherent point before adding another.', skill: 'Mediation' as Skill, level: 'B2' },
]

export const passage = {
  title: 'The Stoa at First Light',
  tag: 'A short reader · 3 min',
  body: 'Before the city wakes, the old stoa holds a different kind of conversation. Footsteps travel between the columns, a baker lifts the first shutter, and the sea answers with a low, patient rhythm. To learn here is to notice what usually passes unseen. A useful phrase is rarely a trophy; it is a small tool, ready when another person needs to understand you.',
  focus: 'notice what usually passes unseen',
}

export const prompts = {
  listening: 'Listen for the speaker’s main intention. What does the pause tell you?',
  speaking: 'Tell a partner about a place that changes how you think. Use one precise detail.',
  writing: 'Write 80–100 words: When has a useful mistake changed your learning?',
}

export const week = [
  { day: 'Mon', minutes: 18, active: true }, { day: 'Tue', minutes: 24, active: true },
  { day: 'Wed', minutes: 31, active: true }, { day: 'Thu', minutes: 12, active: true },
  { day: 'Fri', minutes: 26, active: true }, { day: 'Sat', minutes: 0, active: false }, { day: 'Sun', minutes: 0, active: false },
]

export const starterTasks = [
  { id: 'listen', label: 'Listen & notice', detail: 'Reception · 6 min', icon: 'headphones' },
  { id: 'recall', label: 'Retrieve phrases', detail: 'Mediation · 8 min', icon: 'cards' },
  { id: 'speak', label: 'Shadow a voice', detail: 'Production · 5 min', icon: 'microphone' },
]
