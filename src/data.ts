export type Skill = "Reception" | "Production" | "Interaction" | "Mediation";

export type Word = {
  word: string;
  phonetic: string;
  definition: string;
  example: string;
  collocation: string;
  nuance: string;
  skill: Skill;
  level: "B2" | "C1";
};

export const words: Word[] = [
  {
    word: "eloquent",
    phonetic: "/ˈeləkwənt/",
    definition: "clear and persuasive in speaking or writing",
    example: "She gave an eloquent account of why public spaces matter.",
    collocation: "an eloquent defence of",
    nuance: "Stronger than fluent: it suggests grace and persuasive force.",
    skill: "Production",
    level: "C1",
  },
  {
    word: "deliberate",
    phonetic: "/dɪˈlɪbərət/",
    definition: "careful, intentional and fully considered",
    example: "Deliberate practice turns mistakes into useful evidence.",
    collocation: "a deliberate attempt",
    nuance: "Often contrasts with something accidental or impulsive.",
    skill: "Production",
    level: "B2",
  },
  {
    word: "nuance",
    phonetic: "/ˈnuːɑːns/",
    definition: "a slight but important difference in meaning or feeling",
    example: "Good listeners notice every nuance in a conversation.",
    collocation: "capture the nuance",
    nuance: "Used when a simple either-or description is not enough.",
    skill: "Reception",
    level: "C1",
  },
  {
    word: "resilient",
    phonetic: "/rɪˈzɪliənt/",
    definition: "able to recover and adapt after difficulty",
    example: "A resilient learner returns to the work with a new approach.",
    collocation: "remarkably resilient",
    nuance: "Implies recovery and adaptation, not merely strength.",
    skill: "Interaction",
    level: "B2",
  },
  {
    word: "coherent",
    phonetic: "/kəʊˈhɪərənt/",
    definition: "logical, consistent and easy to follow",
    example: "Build one coherent point before adding another.",
    collocation: "a coherent argument",
    nuance: "Describes how well ideas connect, not whether they are correct.",
    skill: "Mediation",
    level: "B2",
  },
  {
    word: "articulate",
    phonetic: "/ɑːˈtɪkjələt/",
    definition: "able to express ideas clearly and effectively",
    example: "She can articulate a complex idea in plain language.",
    collocation: "articulate a concern",
    nuance: "As a verb, the final syllable sounds like “late”.",
    skill: "Production",
    level: "C1",
  },
  {
    word: "perspective",
    phonetic: "/pəˈspektɪv/",
    definition: "a particular way of understanding a situation",
    example: "Travel gave him a wider perspective on home.",
    collocation: "put something in perspective",
    nuance:
      "More reflective than opinion; it includes the context behind a view.",
    skill: "Interaction",
    level: "B2",
  },
  {
    word: "subtle",
    phonetic: "/ˈsʌtl/",
    definition: "not obvious, but important when noticed",
    example: "There is a subtle difference between doubt and curiosity.",
    collocation: "a subtle shift",
    nuance: "The “b” is silent. It often describes indirect signals.",
    skill: "Reception",
    level: "C1",
  },
  {
    word: "sustain",
    phonetic: "/səˈsteɪn/",
    definition: "to keep something going over a period of time",
    example: "A small ritual can sustain your attention.",
    collocation: "sustain momentum",
    nuance: "Focuses on duration rather than simply starting or supporting.",
    skill: "Mediation",
    level: "B2",
  },
  {
    word: "compelling",
    phonetic: "/kəmˈpelɪŋ/",
    definition: "so convincing or interesting that it holds attention",
    example: "The speaker built a compelling case for slower cities.",
    collocation: "compelling evidence",
    nuance: "Can describe both persuasive arguments and absorbing stories.",
    skill: "Reception",
    level: "C1",
  },
  {
    word: "specific",
    phonetic: "/spəˈsɪfɪk/",
    definition: "exact, clearly identified and not general",
    example: "Give one specific example to make your point vivid.",
    collocation: "be specific about",
    nuance: "Specific detail makes abstract language credible.",
    skill: "Production",
    level: "B2",
  },
  {
    word: "encounter",
    phonetic: "/ɪnˈkaʊntə/",
    definition: "to meet or experience something, often unexpectedly",
    example: "Every conversation is an encounter with another view.",
    collocation: "encounter resistance",
    nuance:
      "More formal than meet, and often suggests significance or difficulty.",
    skill: "Interaction",
    level: "B2",
  },
  {
    word: "reflect",
    phonetic: "/rɪˈflekt/",
    definition: "to think carefully about an experience or idea",
    example: "Take two minutes to reflect on what changed.",
    collocation: "reflect on experience",
    nuance:
      "Also means to show or represent, as in “the data reflects a change”.",
    skill: "Mediation",
    level: "B2",
  },
  {
    word: "clarify",
    phonetic: "/ˈklærɪfaɪ/",
    definition: "to make an idea or statement easier to understand",
    example: "Could you clarify what you mean by useful?",
    collocation: "clarify a point",
    nuance:
      "A neutral interaction skill that is softer than challenge or correct.",
    skill: "Interaction",
    level: "B2",
  },
  {
    word: "retain",
    phonetic: "/rɪˈteɪn/",
    definition: "to keep information, a quality or possession",
    example: "Use a new phrase today if you want to retain it.",
    collocation: "retain information",
    nuance: "More formal than keep and common in academic contexts.",
    skill: "Mediation",
    level: "C1",
  },
  {
    word: "immerse",
    phonetic: "/ɪˈmɜːs/",
    definition: "to involve yourself deeply in an activity or environment",
    example: "Immerse yourself in one story before switching tasks.",
    collocation: "be immersed in",
    nuance: "Suggests full attention and surrounding context.",
    skill: "Reception",
    level: "B2",
  },
  {
    word: "precise",
    phonetic: "/prɪˈsaɪs/",
    definition: "exact, accurate and carefully expressed",
    example: "A precise verb can make a sentence feel alive.",
    collocation: "precise language",
    nuance: "More exact than clear; it leaves little room for ambiguity.",
    skill: "Production",
    level: "B2",
  },
  {
    word: "hesitate",
    phonetic: "/ˈhezɪteɪt/",
    definition: "to pause before acting because you feel uncertain",
    example: "Do not hesitate to ask for a clearer example.",
    collocation: "hesitate to admit",
    nuance: "Often followed by “to” plus a verb.",
    skill: "Interaction",
    level: "B2",
  },
  {
    word: "insight",
    phonetic: "/ˈɪnsaɪt/",
    definition: "a deep and accurate understanding of something",
    example: "A good question can lead to an unexpected insight.",
    collocation: "gain insight into",
    nuance:
      "Countable for an individual realization, uncountable for understanding.",
    skill: "Mediation",
    level: "B2",
  },
  {
    word: "tentative",
    phonetic: "/ˈtentətɪv/",
    definition: "not certain or fixed, and open to revision",
    example: "Her conclusion was deliberately tentative.",
    collocation: "a tentative explanation",
    nuance: "Useful for academic caution; it does not necessarily mean weak.",
    skill: "Production",
    level: "C1",
  },
];

export const readings = [
  {
    title: "The Stoa at First Light",
    tag: "Ideas and place · 4 min",
    level: "B2",
    body: "Before the city wakes, the old stoa holds a different kind of conversation. Footsteps travel between the columns, a baker lifts the first shutter, and the sea answers with a low, patient rhythm. To learn here is to notice what usually passes unseen. A useful phrase is rarely a trophy; it is a small tool, ready when another person needs to understand you.",
    focus: "Notice how concrete details support an abstract idea.",
    question: "Why does the writer compare a useful phrase to a tool?",
  },
  {
    title: "The Value of Useful Friction",
    tag: "Learning and behaviour · 5 min",
    level: "C1",
    body: "Efficiency is often treated as an unquestionable good. Yet the effort involved in retrieving a half-forgotten expression may be precisely what makes it durable. When an answer arrives instantly, we experience fluency but learn very little about the strength of the memory beneath it. Useful friction is not difficulty for its own sake. It is a carefully judged pause that asks the mind to reconstruct, compare and commit.",
    focus: "Track the contrast between perceived fluency and durable learning.",
    question: "Under what condition does difficulty become useful friction?",
  },
  {
    title: "A City Designed for Attention",
    tag: "Society and design · 5 min",
    level: "C1",
    body: "A city shapes attention long before it shapes opinion. Wide roads invite speed; shaded benches make lingering possible; a quiet threshold signals that a building deserves a slower entrance. None of these choices determines behaviour, but together they establish the range of behaviour that feels natural. Good public design is therefore less like an instruction and more like an invitation. It expands what citizens can comfortably choose to do.",
    focus: "Identify the analogy used to define good public design.",
    question: "How does the writer distinguish influence from control?",
  },
];

export const passage = readings[new Date().getDate() % readings.length];

export const prompts = {
  listening:
    "Listen for the speaker’s main intention. What does the pause tell you?",
  speaking:
    "Describe a place that changes how you think. Develop one idea with a precise example and a qualification.",
  writing:
    "Write 150–180 words: When does difficulty improve learning, and when does it merely waste effort?",
};

export const week = [
  { day: "Mon", minutes: 18 },
  { day: "Tue", minutes: 24 },
  { day: "Wed", minutes: 31 },
  { day: "Thu", minutes: 12 },
  { day: "Fri", minutes: 26 },
  { day: "Sat", minutes: 0 },
  { day: "Sun", minutes: 0 },
];

export const starterTasks = [
  {
    id: "listen",
    label: "Listen for stance",
    detail: "Reception · 8 min",
    icon: "headphones",
  },
  {
    id: "recall",
    label: "Retrieve in context",
    detail: "Mediation · 10 min",
    icon: "cards",
  },
  {
    id: "speak",
    label: "Develop one idea",
    detail: "Production · 8 min",
    icon: "microphone",
  },
];
