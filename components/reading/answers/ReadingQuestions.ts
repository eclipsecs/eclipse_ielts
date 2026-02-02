
import { Question, QuestionType } from '../../../types';

export const READING_QUESTIONS: Record<string, Question[]> = {
  'r-p1-underground': [
    // Questions 1-6: Matching issues to people/organizations
    { id: 1, type: QuestionType.MATCHING_PEOPLE, text: "The cost implications of fitting plants with the necessary equipment.", options: [{label: "A - Scott Klara", value: "A"}, {label: "B - Intergovernmental Panel on Climate Change", value: "B"}, {label: "C - International Energy Agency", value: "C"}, {label: "D - Klaus Lackner", value: "D"}, {label: "E - David Hawkins", value: "E"}, {label: "F - World Wide Fund for Nature Australia", value: "F"}], correctAnswer: "D", answerLocation: "Paragraph F, lines 1-3", synonyms: ["cost", "expense", "financial"], explanation: "Klaus Lackner states that it costs about $50 per tonne to capture carbon dioxide, making it too expensive to adapt existing plants." },
    { id: 2, type: QuestionType.MATCHING_PEOPLE, text: "The effects sequestration could have on sea creatures.", options: [{label: "A - Scott Klara", value: "A"}, {label: "B - Intergovernmental Panel on Climate Change", value: "B"}, {label: "C - International Energy Agency", value: "C"}, {label: "D - Klaus Lackner", value: "D"}, {label: "E - David Hawkins", value: "E"}, {label: "F - World Wide Fund for Nature Australia", value: "F"}], correctAnswer: "E", answerLocation: "Paragraph G, lines 3-5", synonyms: ["marine life", "ocean life", "aquatic"], explanation: "David Hawkins warns that carbon dioxide could alter the chemical balance in the ocean with harmful consequences for marine life." },
    { id: 3, type: QuestionType.MATCHING_PEOPLE, text: "The reasons why products such as oil and gas continue to be popular energy sources.", options: [{label: "A - Scott Klara", value: "A"}, {label: "B - Intergovernmental Panel on Climate Change", value: "B"}, {label: "C - International Energy Agency", value: "C"}, {label: "D - Klaus Lackner", value: "D"}, {label: "E - David Hawkins", value: "E"}, {label: "F - World Wide Fund for Nature Australia", value: "F"}], correctAnswer: "D", answerLocation: "Paragraph E, lines 3-4", synonyms: ["fossil fuels", "popularity", "usage"], explanation: "Klaus Lackner explains that around 85% of the world's energy comes from fossil fuels as they are the cheapest and most plentiful source." },
    { id: 4, type: QuestionType.MATCHING_PEOPLE, text: "The need for industrialised countries to give aid to less wealthy countries.", options: [{label: "A - Scott Klara", value: "A"}, {label: "B - Intergovernmental Panel on Climate Change", value: "B"}, {label: "C - International Energy Agency", value: "C"}, {label: "D - Klaus Lackner", value: "D"}, {label: "E - David Hawkins", value: "E"}, {label: "F - World Wide Fund for Nature Australia", value: "F"}], correctAnswer: "E", answerLocation: "Paragraph J, lines 5-8", synonyms: ["assistance", "support", "developing nations"], explanation: "David Hawkins argues that developed nations should provide assistance to encourage developing countries to use sequestration." },
    { id: 5, type: QuestionType.MATCHING_PEOPLE, text: "The significant increase in carbon dioxide concentrations in the air over the last 100 years.", options: [{label: "A - Scott Klara", value: "A"}, {label: "B - Intergovernmental Panel on Climate Change", value: "B"}, {label: "C - International Energy Agency", value: "C"}, {label: "D - Klaus Lackner", value: "D"}, {label: "E - David Hawkins", value: "E"}, {label: "F - World Wide Fund for Nature Australia", value: "F"}], correctAnswer: "A", answerLocation: "Paragraph C, lines 2-3", synonyms: ["concentration increase", "emissions rise", "CO2 levels"], explanation: "Scott Klara reports that airborne carbon dioxide concentrations have risen by nearly a third over the past century." },
    { id: 6, type: QuestionType.MATCHING_PEOPLE, text: "The potential for sequestration to harm human life.", options: [{label: "A - Scott Klara", value: "A"}, {label: "B - Intergovernmental Panel on Climate Change", value: "B"}, {label: "C - International Energy Agency", value: "C"}, {label: "D - Klaus Lackner", value: "D"}, {label: "E - David Hawkins", value: "E"}, {label: "F - World Wide Fund for Nature Australia", value: "F"}], correctAnswer: "F", answerLocation: "Paragraph I, lines 3-4", synonyms: ["risk", "danger", "safety"], explanation: "World Wide Fund for Australia warns that large volumes of carbon dioxide could escape and cause asphyxiation." },
    // Questions 7-9: Paragraph matching
    { id: 7, type: QuestionType.PARAGRAPH_MATCH, text: "Examples of sequestration already in use in several parts of the world.", options: [{label: "A", value: "A"}, {label: "B", value: "B"}, {label: "C", value: "C"}, {label: "D", value: "D"}, {label: "E", value: "E"}, {label: "F", value: "F"}, {label: "G", value: "G"}, {label: "H", value: "H"}, {label: "I", value: "I"}, {label: "J", value: "J"}], correctAnswer: "H", answerLocation: "Paragraph H", synonyms: ["current examples", "existing projects", "already in use"], explanation: "Paragraph H describes two current projects: oil recovery in western Canada and a saline aquifer in the North Sea." },
    { id: 8, type: QuestionType.PARAGRAPH_MATCH, text: "An example of putting carbon dioxide emissions to use in the food and beverage industry.", options: [{label: "A", value: "A"}, {label: "B", value: "B"}, {label: "C", value: "C"}, {label: "D", value: "D"}, {label: "E", value: "E"}, {label: "F", value: "F"}, {label: "G", value: "G"}, {label: "H", value: "H"}, {label: "I", value: "I"}, {label: "J", value: "J"}], correctAnswer: "F", answerLocation: "Paragraph F, lines 6-8", synonyms: ["practical use", "commercial application"], explanation: "Paragraph F mentions that captured carbon is sold for various uses, including carbonating soft drinks." },
    { id: 9, type: QuestionType.PARAGRAPH_MATCH, text: "Current examples of the environmental harm attributed to carbon dioxide in the air.", options: [{label: "A", value: "A"}, {label: "B", value: "B"}, {label: "C", value: "C"}, {label: "D", value: "D"}, {label: "E", value: "E"}, {label: "F", value: "F"}, {label: "G", value: "G"}, {label: "H", value: "H"}, {label: "I", value: "I"}, {label: "J", value: "J"}], correctAnswer: "C", answerLocation: "Paragraph C, lines 4-6", synonyms: ["environmental damage", "climate impact"], explanation: "Paragraph C discusses how increased carbon dioxide levels are believed to cause rising temperatures and sea levels." },
    // Questions 10-13: TRUE/FALSE/NOT GIVEN
    { id: 10, type: QuestionType.TFNG, text: "Both developing and developed nations have decided to investigate carbon dioxide sequestration.", options: [{label: "TRUE", value: "TRUE"}, {label: "FALSE", value: "FALSE"}, {label: "NOT GIVEN", value: "NOT GIVEN"}], correctAnswer: "TRUE", answerLocation: "Paragraph B, lines 3-5", synonyms: ["international cooperation", "research agreement"], explanation: "Paragraph B states that delegates from fourteen industrialised and developing countries agreed to cooperative research into carbon capture and storage." },
    { id: 11, type: QuestionType.TFNG, text: "A growing economy will use more power.", options: [{label: "TRUE", value: "TRUE"}, {label: "FALSE", value: "FALSE"}, {label: "NOT GIVEN", value: "NOT GIVEN"}], correctAnswer: "TRUE", answerLocation: "Paragraph D, lines 2-3", synonyms: ["economic growth", "energy consumption"], explanation: "Paragraph D states that increased energy consumption is a key to economic growth." },
    { id: 12, type: QuestionType.TFNG, text: "Capturing carbon dioxide has become financially attractive.", options: [{label: "TRUE", value: "TRUE"}, {label: "FALSE", value: "FALSE"}, {label: "NOT GIVEN", value: "NOT GIVEN"}], correctAnswer: "FALSE", answerLocation: "Paragraph F, lines 3-5", synonyms: ["cost", "expensive", "financial viability"], explanation: "Paragraph F states that capturing carbon dioxide costs $50 per tonne and raises electricity costs by 30-80%, making it financially unattractive." },
    { id: 13, type: QuestionType.TFNG, text: "More forests need to be planted to improve the atmosphere.", options: [{label: "TRUE", value: "TRUE"}, {label: "FALSE", value: "FALSE"}, {label: "NOT GIVEN", value: "NOT GIVEN"}], correctAnswer: "NOT GIVEN", answerLocation: "N/A", synonyms: ["reforestation", "afforestation"], explanation: "While forests are mentioned as carbon sinks in Paragraph G, the passage does not specifically state that more forests need to be planted." }
  ],
  'r-p1': [
    { 
      id: 1, 
      type: QuestionType.CLASSIFICATION, 
      text: "being expensive", 
      correctAnswer: "C", 
      options: [{label: "ambergris only", value: "A"}, {label: "amber only", value: "B"}, {label: "both ambergris and amber", value: "C"}, {label: "neither ambergris nor amber", value: "D"}],
      answerLocation: "Paragraph 3, lines 1-3",
      synonyms: ["costly", "high value", "precious", "valuable"],
      explanation: "Both ambergris and amber are among the most sought-after substances in the world, almost as valuable as gold. Ambergris sells for roughly $20 a gram."
    },
    { 
      id: 2, 
      type: QuestionType.CLASSIFICATION, 
      text: "adds flavor to food", 
      correctAnswer: "A", 
      options: [{label: "ambergris only", value: "A"}, {label: "amber only", value: "B"}, {label: "both ambergris and amber", value: "C"}, {label: "neither ambergris nor amber", value: "D"}],
      answerLocation: "Paragraph 1, lines 2-3",
      synonyms: ["taste", "flavouring", "seasoning", "culinary use"],
      explanation: "For centuries, ambergris has been used as a flavouring for food. Amber (fossilized resin) has no culinary use."
    },
    { 
      id: 3, 
      type: QuestionType.CLASSIFICATION, 
      text: "used as currency", 
      correctAnswer: "D", 
      options: [{label: "ambergris only", value: "A"}, {label: "amber only", value: "B"}, {label: "both ambergris and amber", value: "C"}, {label: "neither ambergris nor amber", value: "D"}],
      answerLocation: "N/A",
      synonyms: ["money", "payment", "trade"],
      explanation: "Neither ambergris nor amber were used as currency according to the passage. Both were valuable commodities but not used as money."
    },
    { 
      id: 4, 
      type: QuestionType.CLASSIFICATION, 
      text: "being see-through", 
      correctAnswer: "B", 
      options: [{label: "ambergris only", value: "A"}, {label: "amber only", value: "B"}, {label: "both ambergris and amber", value: "C"}, {label: "neither ambergris nor amber", value: "D"}],
      answerLocation: "Paragraph 3, lines 7-8",
      synonyms: ["transparent", "clear", "pellucid"],
      explanation: "Amber is described as a hard, transparent material derived from tree resin. Ambergris is not transparent."
    },
    { 
      id: 5, 
      type: QuestionType.CLASSIFICATION, 
      text: "referred to by Herman Melville", 
      correctAnswer: "A", 
      options: [{label: "ambergris only", value: "A"}, {label: "amber only", value: "B"}, {label: "both ambergris and amber", value: "C"}, {label: "neither ambergris nor amber", value: "D"}],
      answerLocation: "Paragraph 2, lines 3-4",
      synonyms: ["mentioned", "written about", "cited"],
      explanation: "In the 1851 whaling novel Moby-Dick, Herman Melville claimed that ambergris was 'largely used in perfumery.'"
    },
    { 
      id: 6, 
      type: QuestionType.CLASSIFICATION, 
      text: "produces sweet smell", 
      correctAnswer: "A", 
      options: [{label: "ambergris only", value: "A"}, {label: "amber only", value: "B"}, {label: "both ambergris and amber", value: "C"}, {label: "neither ambergris nor amber", value: "D"}],
      answerLocation: "Paragraph 3, lines 4-5",
      synonyms: ["fragrant", "aromatic", "scented"],
      explanation: "Ambergris produces a sweet, smooth, musky and pleasant earthy aroma after hardening. Amber is fossilized resin with no scent."
    },
    { id: 7, type: QuestionType.FILL_GAPS, text: "Sperm whales can't digest the ................. of the squids.", correctAnswer: "beaks", placeholder: "7.", answerLocation: "Paragraph 3, lines 2-3", synonyms: ["jaws", "mouthparts", "mandibles"], explanation: "Sperm whales consume large quantities of squid but cannot digest the hard, sharp, parrot-like beaks, which become irritants in their digestive system." },
    { id: 8, type: QuestionType.FILL_GAPS, text: "Sperm whales drive the irritants out of their intestines by .................", correctAnswer: "vomiting", placeholder: "8.", answerLocation: "Paragraph 3, lines 4-5", synonyms: ["expelling", "regurgitating"], explanation: "The whales expel these irritants through vomiting, which is how ambergris is initially produced." },
    { id: 9, type: QuestionType.FILL_GAPS, text: "The vomit of sperm whales gradually ................. on contact of air before having pleasant smell.", correctAnswer: "hardens", placeholder: "9.", answerLocation: "Paragraph 3, lines 5-6", synonyms: ["solidifies", "dries", "oxidizes"], explanation: "When exposed to air and seawater, the vomited material hardens into a smooth, waxy piece over about a decade." },
    { 
      id: 10, 
      type: QuestionType.TFNG, 
      text: "Most ambergris comes from the dead whales today.", 
      correctAnswer: "TRUE",
      answerLocation: "Paragraph 4, lines 1-3",
      synonyms: ["deceased", "died", "found dead", "carcasses"],
      explanation: "By the 20th century, ambergris is mainly recovered from inside the carcasses of sperm whales, not from killing them."
    },
    { 
      id: 11, 
      type: QuestionType.TFNG, 
      text: "Ambergris is becoming more expensive than before.", 
      correctAnswer: "NOT GIVEN",
      answerLocation: "N/A",
      synonyms: ["price", "cost", "value increase"],
      explanation: "While ambergris is described as expensive ($20 per gram), the passage does not indicate whether its price is increasing over time."
    },
    { 
      id: 12, 
      type: QuestionType.TFNG, 
      text: "Ambergris is still a popular ingredient in perfume production today.", 
      correctAnswer: "FALSE",
      answerLocation: "Paragraph 4, lines 6-9",
      synonyms: ["perfumes", "fragrances", "perfumery"],
      explanation: "The passage states that big fragrance suppliers prefer to use chemical derivatives instead of ambergris due to cost, availability and legal issues."
    },
    { 
      id: 13, 
      type: QuestionType.TFNG, 
      text: "New uses of ambergris have been discovered recently.", 
      correctAnswer: "NOT GIVEN",
      answerLocation: "N/A",
      synonyms: ["applications", "new discoveries", "recent developments"],
      explanation: "The passage mentions traditional uses of ambergris but does not provide information about any recently discovered new uses."
    }
  ],
  'r-cultural-tourist': [
    { id: 1, type: QuestionType.TFNG, text: "Cyriacus was unable to research his journeys before he left.", correctAnswer: "TRUE" },
    { id: 2, type: QuestionType.TFNG, text: "The Roman Emperor Trajan built the city of Ancona", correctAnswer: "NOT GIVEN" },
    { id: 3, type: QuestionType.TFNG, text: "Respect for ancient architecture was widespread in the 15th century", correctAnswer: "FALSE" },
    { id: 4, type: QuestionType.TFNG, text: "Cyriacus’s experience as a merchant gave him skills he needed to investigate the ancient world.", correctAnswer: "FALSE" },
    { id: 5, type: QuestionType.TFNG, text: "Before leaving on his journey, Cyriacus studied ancient languages.", correctAnswer: "TRUE" },
    { id: 6, type: QuestionType.TFNG, text: "Travelling by sea in the 15th century was easier than travelling on land.", correctAnswer: "FALSE" },
    { id: 7, type: QuestionType.TFNG, text: "Cyriacus tried to make his fellow sea travelers more comfortable", correctAnswer: "NOT GIVEN" },
    { id: 8, type: QuestionType.FILL_GAPS, text: "the wealth of the city had come from", correctAnswer: "commerce", placeholder: "8." },
    { id: 9, type: QuestionType.FILL_GAPS, text: "to the ancient city ruins not available when visited by Cyriacus", correctAnswer: "guidebook", placeholder: "9." },
    { id: 10, type: QuestionType.FILL_GAPS, text: "the city was destroyed by a powerful", correctAnswer: "earthquake", placeholder: "10." },
    { id: 11, type: QuestionType.FILL_GAPS, text: "a year later Emperor Hadrian supported a", correctAnswer: "campaign", placeholder: "11." },
    { id: 12, type: QuestionType.FILL_GAPS, text: "Cyriacus found part of the temple... and made drawings of the", correctAnswer: "doorway", placeholder: "12." },
    { id: 13, type: QuestionType.FILL_GAPS, text: "by the 15th century Delphi had almost disappeared due to natural disasters and", correctAnswer: "war", placeholder: "13." }
  ],
  'r-p3': [
    { id: 27, type: QuestionType.MATCHING_ENDINGS, text: "The speed of technological changes", options: [{ label: "A - requires more detailed study by psychologists", value: "A" }, { label: "B - means people have no time to challenge the significance of the new technology", value: "B" }, { label: "C - may reduce inventiveness and innovation", value: "C" }, { label: "D - suggests computers will take over the workplace", value: "D" }, { label: "E - results from increased electronic supervision", value: "E" }], correctAnswer: "B" },
    { id: 28, type: QuestionType.MATCHING_ENDINGS, text: "A dependency on technology and computers", options: [{ label: "A - requires more detailed study by psychologists", value: "A" }, { label: "B - means people have no time to challenge the significance of the new technology", value: "B" }, { label: "C - may reduce inventiveness and innovation", value: "C" }, { label: "D - suggests computers will take over the workplace", value: "D" }, { label: "E - results from increased electronic supervision", value: "E" }], correctAnswer: "C" },
    { id: 29, type: QuestionType.MATCHING_ENDINGS, text: "A deterioration in personal service", options: [{ label: "A - requires more detailed study by psychologists", value: "A" }, { label: "B - means people have no time to challenge the significance of the new technology", value: "B" }, { label: "C - may reduce inventiveness and innovation", value: "C" }, { label: "D - suggests computers will take over the workplace", value: "D" }, { label: "E - results from increased electronic supervision", value: "E" }], correctAnswer: "E" },
    { id: 30, type: QuestionType.MATCHING_PEOPLE, text: "Technology has placed greater expectations on workers not to make mistakes.", options: [{ label: "A - Craig Brod", value: "A" }, { label: "B - Daniel Dennett", value: "B" }, { label: "C - Joseph Boyett and Henry Conn", value: "C" }, { label: "D - Philip Nicholson", value: "D" }], correctAnswer: "B" },
    { id: 31, type: QuestionType.MATCHING_PEOPLE, text: "People will need time away from technology to reduce the frustrations caused by it.", options: [{ label: "A - Craig Brod", value: "A" }, { label: "B - Daniel Dennett", value: "B" }, { label: "C - Joseph Boyett and Henry Conn", value: "C" }, { label: "D - Philip Nicholson", value: "D" }], correctAnswer: "A" },
    { id: 32, type: QuestionType.MATCHING_PEOPLE, text: "Interacting with others at work contributes to creative thinking.", options: [{ label: "A - Craig Brod", value: "A" }, { label: "B - Daniel Dennett", value: "B" }, { label: "C - Joseph Boyett and Henry Conn", value: "C" }, { label: "D - Philip Nicholson", value: "D" }], correctAnswer: "A" },
    { id: 33, type: QuestionType.MATCHING_PEOPLE, text: "The psychological effect of working with technology is similar to the anxiety felt after surviving a major ordeal.", options: [{ label: "A - Craig Brod", value: "A" }, { label: "B - Daniel Dennett", value: "B" }, { label: "C - Joseph Boyett and Henry Conn", value: "C" }, { label: "D - Philip Nicholson", value: "D" }], correctAnswer: "D" },
    { id: 34, type: QuestionType.MATCHING_PEOPLE, text: "Technology will ultimately increase unemployment for more highly qualified personnel.", options: [{ label: "A - Craig Brod", value: "A" }, { label: "B - Daniel Dennett", value: "B" }, { label: "C - Joseph Boyett and Henry Conn", value: "C" }, { label: "D - Philip Nicholson", value: "D" }], correctAnswer: "C" },
    { id: 35, type: QuestionType.MATCHING_PEOPLE, text: "More counselling is required to help people cope with the demands of the modern workplace.", options: [{ label: "A - Craig Brod", value: "A" }, { label: "B - Daniel Dennett", value: "B" }, { label: "C - Joseph Boyett and Henry Conn", value: "C" }, { label: "D - Philip Nicholson", value: "D" }], correctAnswer: "D" },
    { id: 36, type: QuestionType.TFNG, text: "Our knowledge of the effects of technology on workers is still limited.", options: [{ label: "TRUE", value: "TRUE" }, { label: "FALSE", value: "FALSE" }, { label: "NOT GIVEN", value: "NOT GIVEN" }], correctAnswer: "TRUE" },
    { id: 37, type: QuestionType.TFNG, text: "An early indicator of technological anxiety is a tendency to adopt machine-like thinking.", options: [{ label: "TRUE", value: "TRUE" }, { label: "FALSE", value: "FALSE" }, { label: "NOT GIVEN", value: "NOT GIVEN" }], correctAnswer: "TRUE" },
    { id: 38, type: QuestionType.TFNG, text: "We have now started to doubt our ability to perform well at work.", options: [{ label: "TRUE", value: "TRUE" }, { label: "FALSE", value: "FALSE" }, { label: "NOT GIVEN", value: "NOT GIVEN" }], correctAnswer: "TRUE" },
    { id: 39, type: QuestionType.TFNG, text: "Top level managers may be more negatively affected by changes electronic workplace than junior workers.", options: [{ label: "TRUE", value: "TRUE" }, { label: "FALSE", value: "FALSE" }, { label: "NOT GIVEN", value: "NOT GIVEN" }], correctAnswer: "NOT GIVEN" },
    { id: 40, type: QuestionType.TFNG, text: "Employees who learn to use new technology quickly will get promoted.", options: [{ label: "TRUE", value: "TRUE" }, { label: "FALSE", value: "FALSE" }, { label: "NOT GIVEN", value: "NOT GIVEN" }], correctAnswer: "NOT GIVEN" }
  ],
  'r-ascension': [
    { 
      id: 1, 
      type: QuestionType.TFNG, 
      text: "People can visit Ascension easily today.", 
      correctAnswer: "FALSE",
      answerLocation: "Paragraph 1, lines 3-4",
      synonyms: ["accessibility", "travel", "visit"],
      explanation: "The passage states that Ascension Island is 'certainly difficult for an ordinary commercial traveler to reach even today.'"
    },
    { 
      id: 2, 
      type: QuestionType.TFNG, 
      text: "The mid-Atlantic ridge continues to experience volcanic activity.", 
      correctAnswer: "TRUE",
      answerLocation: "Paragraph 1, lines 5-6",
      synonyms: ["volcanoes", "geological activity", "hot spot"],
      explanation: "The passage states that Ascension 'occupies a hot spot on the ridge' and its 'volcano is especially active to this day.'"
    },
    { 
      id: 3, 
      type: QuestionType.TFNG, 
      text: "João da Nova Castella was the first to call his discovery Ascension Island.", 
      correctAnswer: "FALSE",
      answerLocation: "Paragraph 2, lines 1-2",
      synonyms: ["naming", "discoverer", "history"],
      explanation: "João da Nova Castella discovered the island in 1501, but it was named Ascension Island two years later by Alfonso de Albuquerque."
    },
    { 
      id: 4, 
      type: QuestionType.TFNG, 
      text: "When the island was discovered, its center contained more life than the area near the sea.", 
      correctAnswer: "NOT GIVEN",
      answerLocation: "N/A",
      synonyms: ["vegetation", "life", "ecosystem"],
      explanation: "The passage mentions that coastal regions had 'a few small, underdeveloped plants' but says nothing about comparing life in the center to coastal areas."
    },
    { 
      id: 5, 
      type: QuestionType.TFNG, 
      text: "The Portuguese military wanted to use the island as a base.", 
      correctAnswer: "NOT GIVEN",
      answerLocation: "N/A",
      synonyms: ["military", "strategic base", "Portuguese"],
      explanation: "While the British military used the island as a strategic base in the 19th century, there is no mention of Portuguese military intentions."
    },
    { 
      id: 6, 
      type: QuestionType.TFNG, 
      text: "In the 19th century, Ascension Island acted as an important port for naval supplies.", 
      correctAnswer: "TRUE",
      answerLocation: "Paragraph 3, lines 2-3",
      synonyms: ["naval", "British", "supplies"],
      explanation: "The passage states that by the early 19th century, Ascension 'had become a vital strategic base for the British military' and was 'a thriving waystation providing much needed provisions for British ships.'"
    },
    { 
      id: 7, 
      type: QuestionType.TFNG, 
      text: "The British imported fresh water to Ascension Island from southern Africa.", 
      correctAnswer: "FALSE",
      answerLocation: "Paragraph 3, lines 3-5",
      synonyms: ["water", "imports", "fresh water"],
      explanation: "The passage mentions the problem of fresh water supply but does not state that water was imported from southern Africa. It discusses trees being planted to reduce evaporation instead."
    },
    { 
      id: 8, 
      type: QuestionType.TFNG, 
      text: "When it rained on Ascension Island, the water quickly dried up.", 
      correctAnswer: "TRUE",
      answerLocation: "Paragraph 3, lines 4-5",
      synonyms: ["rain", "evaporation", "arid"],
      explanation: "The passage states that 'the little rain that did fall swiftly disappeared in the hot environment' due to the lack of trees."
    },
    { id: 9, type: QuestionType.FILL_GAPS, text: "before his 1836 visit, Darwin had limited ............. of what he might find", correctAnswer: "expectations", placeholder: "9.", answerLocation: "Paragraph 4, lines 3-4", synonyms: ["expectations", "anticipations", "predictions"], explanation: "Darwin later admitted that his expectations of Ascension were low, and it 'cannot have appeared to be a very promising place.'" },
    { id: 10, type: QuestionType.FILL_GAPS, text: "after his arrival, Darwin saw the ............. of the island and so devised a plan", correctAnswer: "potential", placeholder: "10.", answerLocation: "Paragraph 5, lines 1-2", synonyms: ["possibility", "promise", "opportunity"], explanation: "Darwin became excited by what he considered to be Ascension's potential, encountering volcanic cones and planning how to transform the barren landscape." },
    { id: 11, type: QuestionType.FILL_GAPS, text: "on an expedition to explore the area around ............. , Hooker visited Ascension", correctAnswer: "Antarctica", placeholder: "11.", answerLocation: "Paragraph 6, lines 1-2", synonyms: ["Antarctic region", "polar area"], explanation: "Hooker set off on a four-year journey around the icy polar region of Antarctica aboard HMS Erebus and HMS Terror." },
    { id: 12, type: QuestionType.FILL_GAPS, text: "trees were planted on Ascension to lessen the ............. of rainwater", correctAnswer: "evaporation", placeholder: "12.", answerLocation: "Paragraph 7, lines 1-2", synonyms: ["water loss", "drying"], explanation: "Trees would provide shade, helping to reduce evaporation after rain, which was a major problem on the barren island." },
    { id: 13, type: QuestionType.FILL_GAPS, text: "from the 1850s, plants were brought to Ascension from ............. around the world", correctAnswer: "gardens", placeholder: "13.", answerLocation: "Paragraph 8, lines 1-2", synonyms: ["botanical gardens", "plant collections"], explanation: "Ships arrived with trees selected from special gardens maintained by scientists in Europe, South Africa and South America." },
    { id: 14, type: QuestionType.FILL_GAPS, text: "the cloud forest traps moisture contained in the ............. which blows off the ocean", correctAnswer: "mist", placeholder: "14.", answerLocation: "Paragraph 9, lines 1-2", synonyms: ["sea mist", "fog", "clouds"], explanation: "Green Mountain is described as a 'cloud forest' where trees capture sea mist, creating dampness on this essentially dry island." },
    { id: 15, type: QuestionType.FILL_GAPS, text: "the cloud forest is a successful man-made .............", correctAnswer: "ecosystem", placeholder: "15.", answerLocation: "Paragraph 9, lines 3-4", synonyms: ["environment", "habitat", "biological system"], explanation: "The cloud forest is described as a fully functioning, but totally artificial ecosystem created in a matter of decades." },
    { id: 16, type: QuestionType.FILL_GAPS, text: "According to Dr Dave Wilkinson, the ideas learned from Ascension may be applicable to life in future human ............. on Mars.", correctAnswer: "colonies", placeholder: "16.", answerLocation: "Paragraph 10, lines 4-5", synonyms: ["settlements", "outposts", "habitations"], explanation: "Dr Wilkinson suggested that the Ascension experiment principles could one day be used to transform Mars to make it sustainable for human colonies." }
  ],
  'r-beatrix-potter': [
    { 
      id: 1, 
      type: QuestionType.TFNG, 
      text: "The Tale of Peter Rabbit was Beatrix Potter's first published book.", 
      correctAnswer: "FALSE",
      answerLocation: "Paragraph 5, lines 1-2",
      synonyms: ["first book", "initial publication", "debut"],
      explanation: "For several years, Potter tried to get her first children's book, The Tale of Peter Rabbit, published, implying it was not her first attempt."
    },
    { 
      id: 2, 
      type: QuestionType.TFNG, 
      text: "Beatrix Potter was educated at a traditional school.", 
      correctAnswer: "FALSE",
      answerLocation: "Paragraph 2, lines 1-2",
      synonyms: ["education", "schooling", "formal education"],
      explanation: "Potter was educated in her parents' house by a governess, not at a traditional school."
    },
    { 
      id: 3, 
      type: QuestionType.TFNG, 
      text: "Beatrix Potter kept a diary in a secret code as a teenager.", 
      correctAnswer: "TRUE",
      answerLocation: "Paragraph 2, lines 4-6",
      synonyms: ["diary", "secret code", "journal"],
      explanation: "When Beatrix was 15, she began to keep a diary written in a secret code of her own invention."
    },
    { 
      id: 4, 
      type: QuestionType.TFNG, 
      text: "Beatrix Potter received formal art training at a prestigious academy.", 
      correctAnswer: "FALSE",
      answerLocation: "Paragraph 3, lines 1-2",
      synonyms: ["art education", "formal training", "art school"],
      explanation: "Potter was a naturally gifted artist and with the aid of some art lessons learnt the technical side of drawing, but did not attend a prestigious academy."
    },
    { 
      id: 5, 
      type: QuestionType.TFNG, 
      text: "Beatrix Potter was interested in studying fungi scientifically.", 
      correctAnswer: "TRUE",
      answerLocation: "Paragraph 3, lines 5-7",
      synonyms: ["mycology", "fungi study", "scientific interest"],
      explanation: "Potter was interested in natural history and achieved respect from the scientific establishment for her illustrations and contribution to mycology, the study of fungi."
    },
    { 
      id: 6, 
      type: QuestionType.TFNG, 
      text: "Beatrix Potter married early in her twenties.", 
      correctAnswer: "FALSE",
      answerLocation: "Paragraph 4, lines 1-3",
      synonyms: ["marriage", "married life", "spouse"],
      explanation: "When Potter was in her early 20s, her parents tried to arrange a partner, but she turned them all down and remained single throughout her life."
    },
    { 
      id: 7, 
      type: QuestionType.TFNG, 
      text: "The Tale of Peter Rabbit was initially rejected by publishers.", 
      correctAnswer: "TRUE",
      answerLocation: "Paragraph 5, lines 1-2",
      synonyms: ["rejection", "publishing", "initial failure"],
      explanation: "Her initial attempts to get The Tale of Peter Rabbit published proved unsuccessful, but she persevered and eventually it was accepted."
    },
    { 
      id: 8, 
      type: QuestionType.TFNG, 
      text: "Norman Warne was the oldest brother in the publishing company.", 
      correctAnswer: "FALSE",
      answerLocation: "Paragraph 5, lines 3-5",
      synonyms: ["Warne brothers", "publishing family", "Norman Warne"],
      explanation: "The project was given to the youngest brother in the family company, Norman Warne, for his first project as a kind of test."
    },
    { id: 9, type: QuestionType.FILL_GAPS, text: "Beatrix Potter was born in London in .............", correctAnswer: "1866", placeholder: "9.", answerLocation: "Paragraph 2, line 1", synonyms: ["birth year", "year of birth", "when born"], explanation: "Born to a comfortable middle-class family in London in 1866." },
    { id: 10, type: QuestionType.FILL_GAPS, text: "As a child, Beatrix Potter kept many animals including rabbits, frogs and .............", correctAnswer: "bats", placeholder: "10.", answerLocation: "Paragraph 3, line 2", synonyms: ["pets", "animals", "creatures"], explanation: "During her childhood, she looked after many animals, such as rabbits, frogs, and even bats." },
    { id: 11, type: QuestionType.FILL_GAPS, text: "Beatrix Potter wanted to study at ............. in London but was rejected because of her gender.", correctAnswer: "Kew", placeholder: "11.", answerLocation: "Paragraph 3, lines 5-6", synonyms: ["botanical gardens", "Royal Botanic Gardens"], explanation: "An uncle tried to help her become a student at the Royal Botanic Gardens at Kew, but she was rejected because of her gender." },
    { id: 12, type: QuestionType.FILL_GAPS, text: "Beatrix Potter remained ............. throughout her life.", correctAnswer: "single", placeholder: "12.", answerLocation: "Paragraph 4, line 3", synonyms: ["unmarried", "never married"], explanation: "Thus, unusually for British women of those times, she remained single and lived in her parents' home." },
    { id: 13, type: QuestionType.FILL_GAPS, text: "Beatrix Potter moved to the ............. in northern England after Warne's death.", correctAnswer: "Lake District", placeholder: "13.", answerLocation: "Paragraph 6, lines 1-2", synonyms: ["countryside", "rural area", "England"], explanation: "After Warne's death, Potter moved to the Lake District in northern England." },
    { id: 14, type: QuestionType.FILL_GAPS, text: "Beatrix Potter left over 4,000 acres of land to the .............", correctAnswer: "National Trust", placeholder: "14.", answerLocation: "Paragraph 6, lines 6-7", synonyms: ["conservation organization", "heritage trust", "land trust"], explanation: "On her death, she left over 4,000 acres to the National Trust, an organisation which protects historical buildings and areas of countryside in England." }
  ],
  'r-bondi': [
    { id: 1, type: QuestionType.TFNG, text: "Australians have always valued Bondi Beach as a national treasure.", correctAnswer: "FALSE" },
    { id: 2, type: QuestionType.TFNG, text: "Aboriginal people had a strong connection to the Australian coast before British settlement.", correctAnswer: "TRUE" },
    { id: 3, type: QuestionType.TFNG, text: "The cultural associations of Australia's beaches are entirely indigenous in origin.", correctAnswer: "FALSE" },
    { id: 4, type: QuestionType.TFNG, text: "Brighton Beach in England influenced the development of Australian beach culture.", correctAnswer: "TRUE" },
    { id: 5, type: QuestionType.TFNG, text: "Coogee was the first Sydney beach to be accessible by tram.", correctAnswer: "TRUE" },
    { id: 6, type: QuestionType.TFNG, text: "Manly Beach attracted primarily working-class visitors.", correctAnswer: "FALSE" },
    { id: 7, type: QuestionType.TFNG, text: "Bondi developed differently from other Sydney beach suburbs because of flat construction.", correctAnswer: "TRUE" },
    { id: 8, type: QuestionType.TFNG, text: "Bondi's working-class character changed in the 1950s after the royal visit.", correctAnswer: "TRUE" },
    { id: 9, type: QuestionType.FILL_GAPS, text: "In the first century of British settlement, Australians were fascinated by the ............. interior.", correctAnswer: "desert", placeholder: "9." },
    { id: 10, type: QuestionType.FILL_GAPS, text: "By the 1820s, the local Aboriginal population near Sydney had largely disappeared due to .............", correctAnswer: "diseases", placeholder: "10." },
    { id: 11, type: QuestionType.FILL_GAPS, text: "At the end of the 19th century, the beach emerged as an alternative cultural ............. to the mythology of the interior.", correctAnswer: "landscape", placeholder: "11." },
    { id: 12, type: QuestionType.FILL_GAPS, text: "The 1954 royal visit brought ............. attention to Bondi Beach.", correctAnswer: "international", placeholder: "12." },
    { id: 13, type: QuestionType.FILL_GAPS, text: "Since the 1970s, Bondi has become the ............. backdrop for any artistic project requiring a beach setting.", correctAnswer: "inevitable", placeholder: "13." },
    { id: 14, type: QuestionType.FILL_GAPS, text: "For the 2000 Olympics, Bondi was chosen to host the beach ............. stadium.", correctAnswer: "volleyball", placeholder: "14." }
  ],
  'r-prosopagnosia': [
    { 
      id: 1, 
      type: QuestionType.TFNG, 
      text: "Before attending college Jacob was capable of recognising people he knew well.", 
      correctAnswer: "FALSE",
      answerLocation: "Paragraph 2",
      synonyms: ["before college", "previously", "earlier"],
      explanation: "The passage states that Jacob 'had had the same trouble all his life' recognizing people, meaning he had prosopagnosia before college.",
      group: "Questions 1-7: TRUE/FALSE/NOT GIVEN - Do the following statements agree with the information given in Reading Passage 1? In boxes 1-7 on your answer sheet, write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, NOT GIVEN if there is no information on this."
    },
    { 
      id: 2, 
      type: QuestionType.TFNG, 
      text: "Researchers believe that prosopagnosia may be a growing problem.", 
      correctAnswer: "NOT GIVEN",
      answerLocation: "N/A",
      synonyms: ["increasing", "more common", "rising"],
      explanation: "The passage mentions that prosopagnosia is more common than previously thought (2-2.5%) but does not suggest it is a growing problem over time.",
      group: "Questions 1-7: TRUE/FALSE/NOT GIVEN"
    },
    { 
      id: 3, 
      type: QuestionType.TFNG, 
      text: "It is harder to identify developmental prosopagnosia in babies than in young children.", 
      correctAnswer: "NOT GIVEN",
      answerLocation: "N/A",
      synonyms: ["babies", "infants", "diagnosis", "identifying"],
      explanation: "The passage mentions studies of babies with lens problems as a risk factor but does not discuss how easy or hard it is to identify prosopagnosia in babies versus children.",
      group: "Questions 1-7: TRUE/FALSE/NOT GIVEN"
    },
    { 
      id: 4, 
      type: QuestionType.TFNG, 
      text: "A German study seems to support the Harvard and UCL research findings.", 
      correctAnswer: "TRUE",
      answerLocation: "Paragraph 3",
      synonyms: ["German study", "Martina Gruter", "confirmation"],
      explanation: "The German study by Martina Gruter reported similar findings (2.5%) to the Harvard/UCL study (2%), both showing that prosopagnosia is more common than previously thought.",
      group: "Questions 1-7: TRUE/FALSE/NOT GIVEN"
    },
    { 
      id: 5, 
      type: QuestionType.TFNG, 
      text: "In general, prosopagnosics are aware that other people can recognise faces more easily than they can.", 
      correctAnswer: "FALSE",
      answerLocation: "Paragraph 4",
      synonyms: ["awareness", "recognition skills", "comparison"],
      explanation: "The passage states that prosopagnosics 'often don't realise that other people have better recognition skills than they do.'",
      group: "Questions 1-7: TRUE/FALSE/NOT GIVEN"
    },
    { 
      id: 6, 
      type: QuestionType.TFNG, 
      text: "In most cases, prosopagnosics have developed ways to deal with their problem.", 
      correctAnswer: "TRUE",
      answerLocation: "Paragraph 5",
      synonyms: ["strategies", "coping", "managing"],
      explanation: "The passage states that 'the majority of developmental prosopagnosics possess strategies that allow them to get around their difficulty.'",
      group: "Questions 1-7: TRUE/FALSE/NOT GIVEN"
    },
    { 
      id: 7, 
      type: QuestionType.TFNG, 
      text: "The study of prosopagnosia may help neuroscientists to treat different kinds of brain injury.", 
      correctAnswer: "NOT GIVEN",
      answerLocation: "N/A",
      synonyms: ["treatment", "brain injury", "therapy"],
      explanation: "The passage mentions that studying prosopagnosia may help understand how the brain processes information, but does not specifically mention treating brain injuries.",
      group: "Questions 1-7: TRUE/FALSE/NOT GIVEN"
    },
    { id: 8, type: QuestionType.FILL_GAPS, text: "As well as being unable to recognize facial features prosopagnosics may also have problems recognizing commonly seen", noteText: "As well as being unable to recognize facial features prosopagnosics may also have problems recognizing commonly seen", blankText: ".............", correctAnswer: "animals", placeholder: "8.", answerLocation: "Paragraph 6", synonyms: ["creatures", "species", "wildlife"], explanation: "The passage states that some prosopagnosics have trouble with 'ordinary everyday objects and... animals which would normally be familiar as well.'", group: "Questions 8-13: Complete the notes below. Choose ONE WORD ONLY from the passage for each answer." },
    { id: 9, type: QuestionType.FILL_GAPS, text: "The", noteText: "The", blankText: "............. on someone else's face.", correctAnswer: "emotion", placeholder: "9.", answerLocation: "Paragraph 6", synonyms: ["feelings", "expression", "mood"], explanation: "The passage mentions that some prosopagnosics 'could identify the emotion which was conveyed on another's face.'", group: "Questions 8-13: Complete the notes below. Choose ONE WORD ONLY from the passage for each answer." },
    { id: 10, type: QuestionType.FILL_GAPS, text: "Prosopagnosia may be caused by just one", noteText: "Prosopagnosia may be caused by just one", blankText: "............. according to Martina Gruter", correctAnswer: "gene", placeholder: "10.", answerLocation: "Paragraph 7", synonyms: ["genetic factor", "DNA", "inherited"], explanation: "The German team 'believe they have good evidence that a single gene could be responsible.'", group: "Questions 8-13: Complete the notes below. Choose ONE WORD ONLY from the passage for each answer." },
    { id: 11, type: QuestionType.FILL_GAPS, text: "Prosopagnosia may be caused by a defect in the", noteText: "Prosopagnosia may be caused by a defect in the", blankText: "............. eye according to Brad Duchaine", correctAnswer: "left", placeholder: "11.", answerLocation: "Paragraph 7", synonyms: ["one eye", "left eye", "specific eye"], explanation: "Duchaine refers to studies showing that 'when it's the left one, being unable to see through this eye during the first two months of life is a major risk factor.'", group: "Questions 8-13: Complete the notes below. Choose ONE WORD ONLY from the passage for each answer." },
    { id: 12, type: QuestionType.FILL_GAPS, text: "Joseph Degutis' patient proved he had been successfully trained to recognize faces inside the", noteText: "Joseph Degutis' patient proved he had been successfully trained to recognize faces inside the", blankText: ".............", correctAnswer: "laboratory", placeholder: "12.", answerLocation: "Paragraph 8", synonyms: ["lab", "test setting", "research facility"], explanation: "Degutis 'reported successfully training a severe developmental prosopagnosic to recognise faces during tests carried out in the laboratory.'", group: "Questions 8-13: Complete the notes below. Choose ONE WORD ONLY from the passage for each answer." },
    { id: 13, type: QuestionType.FILL_GAPS, text: "Thomas Gruter doubts that training will work and mentions that", noteText: "Thomas Gruter doubts that training will work and mentions that", blankText: "............. by some subjects can affect research results", correctAnswer: "cheating", placeholder: "13.", answerLocation: "Paragraph 8", synonyms: ["deception", "dishonesty", "tricks"], explanation: "Thomas Gruter 'points out that cheating is a possibility during tests' and gives an example of someone memorising facial features.'", group: "Questions 8-13: Complete the notes below. Choose ONE WORD ONLY from the passage for each answer." }
  ],
  'r-triumph-city': [
    { id: 1, type: QuestionType.TFNG, text: "Edward Glaeser argues that cities are unhealthy places that should be avoided.", correctAnswer: "FALSE" },
    { id: 2, type: QuestionType.TFNG, text: "Glaeser believes that proximity to intelligent people enhances our own intelligence.", correctAnswer: "TRUE" },
    { id: 3, type: QuestionType.TFNG, text: "Denser cities tend to have lower incomes per capita according to Glaeser's data.", correctAnswer: "FALSE" },
    { id: 4, type: QuestionType.TFNG, text: "Glaeser claims that city residents have a smaller carbon footprint than suburban residents.", correctAnswer: "TRUE" },
    { id: 5, type: QuestionType.TFNG, text: "The author supports strict zoning laws to control urban growth.", correctAnswer: "FALSE" },
    { id: 6, type: QuestionType.TFNG, text: "Critics argue that Glaeser's analysis ignores the problems of urban poverty.", correctAnswer: "TRUE" },
    { id: 7, type: QuestionType.TFNG, text: "Glaeser believes that preserving rural landscapes is more important than urban development.", correctAnswer: "FALSE" },
    { id: 8, type: QuestionType.TFNG, text: "More than half of the global population now lives in cities.", correctAnswer: "TRUE" },
    { id: 9, type: QuestionType.FILL_GAPS, text: "Glaeser's book is titled '............. of the City'.", correctAnswer: "Triumph", placeholder: "9." },
    { id: 10, type: QuestionType.FILL_GAPS, text: "Glaeser works as an economist at ............. University.", correctAnswer: "Harvard", placeholder: "10." },
    { id: 11, type: QuestionType.FILL_GAPS, text: "The author uses the term 'human capital .............' to describe the benefits of city living.", correctAnswer: "spillovers", placeholder: "11." },
    { id: 12, type: QuestionType.FILL_GAPS, text: "Glaeser argues that cities enable innovation through the ............. of people.", correctAnswer: "connection", placeholder: "12." },
    { id: 13, type: QuestionType.FILL_GAPS, text: "The book critiques urban planning policies like ............. laws that restrict housing supply.", correctAnswer: "zoning", placeholder: "13." },
    { id: 14, type: QuestionType.FILL_GAPS, text: "According to the review, the triumph of the city represents the triumph of human .............", correctAnswer: "connection", placeholder: "14." }
  ],
  // PASSAGE 2 QUESTIONS
  'r-p2-computer-games': [
    { id: 1, type: QuestionType.TFNG, text: "Computer games are only popular among young people.", correctAnswer: "FALSE" },
    { id: 2, type: QuestionType.TFNG, text: "Action games have been linked to enhanced attention and faster reaction times.", correctAnswer: "TRUE" },
    { id: 3, type: QuestionType.TFNG, text: "The concept of educational games is a recent development.", correctAnswer: "TRUE" },
    { id: 4, type: QuestionType.TFNG, text: "Research shows that all types of computer games improve cognitive abilities.", correctAnswer: "FALSE" },
    { id: 5, type: QuestionType.TFNG, text: "Excessive gaming has been linked to attention problems and obesity.", correctAnswer: "TRUE" },
    { id: 6, type: QuestionType.TFNG, text: "All researchers agree that violent video games cause aggressive behaviour.", correctAnswer: "FALSE" },
    { id: 7, type: QuestionType.TFNG, text: "The gaming industry has introduced features to promote healthy gaming habits.", correctAnswer: "TRUE" },
    { id: 8, type: QuestionType.TFNG, text: "Virtual reality is currently only used for entertainment purposes.", correctAnswer: "FALSE" },
    { id: 9, type: QuestionType.FILL_GAPS, text: "Computer games have become one of the most popular forms of ............. in the modern world.", correctAnswer: "entertainment", placeholder: "9." },
    { id: 10, type: QuestionType.FILL_GAPS, text: "The concept of '.............' combines education with entertainment.", correctAnswer: "edutainment", placeholder: "10." },
    { id: 11, type: QuestionType.FILL_GAPS, text: "Some researchers have found links between violent games and reduced ............. behaviour.", correctAnswer: "prosocial", placeholder: "11." },
    { id: 12, type: QuestionType.FILL_GAPS, text: "Many games now include systems that remind players to take .............", correctAnswer: "breaks", placeholder: "12." },
    { id: 13, type: QuestionType.FILL_GAPS, text: "The key challenge will be harnessing the power of technology while mitigating potential .............", correctAnswer: "harms", placeholder: "13." },
    { id: 14, type: QuestionType.FILL_GAPS, text: "Some people view games as a powerful medium with the potential to ............. people around the world.", correctAnswer: "connect", placeholder: "14." }
  ],
  'r-p2-chocolate': [
    { id: 1, type: QuestionType.TFNG, text: "Chocolate was first consumed by ancient European civilizations.", correctAnswer: "FALSE" },
    { id: 2, type: QuestionType.TFNG, text: "Cacao beans were used as currency by Mesoamerican civilizations.", correctAnswer: "TRUE" },
    { id: 3, type: QuestionType.TFNG, text: "The addition of sugar transformed chocolate into a sweet treat.", correctAnswer: "TRUE" },
    { id: 4, type: QuestionType.TFNG, text: "Milk chocolate was invented before sugar was added to chocolate.", correctAnswer: "FALSE" },
    { id: 5, type: QuestionType.TFNG, text: "The chocolate industry faces environmental challenges related to cacao production.", correctAnswer: "TRUE" },
    { id: 6, type: QuestionType.TFNG, text: "Fair trade certification guarantees that farmers receive a maximum price for cacao.", correctAnswer: "FALSE" },
    { id: 7, type: QuestionType.TFNG, text: "Consumer demand for dark chocolate with higher cacao content is growing.", correctAnswer: "TRUE" },
    { id: 8, type: QuestionType.TFNG, text: "Chocolate production has no significant impact on the global economy.", correctAnswer: "FALSE" },
    { id: 9, type: QuestionType.FILL_GAPS, text: "Chocolate is derived from the ............. plant native to Mesoamerica.", correctAnswer: "cacao", placeholder: "9." },
    { id: 10, type: QuestionType.FILL_GAPS, text: "The industrial revolution brought significant changes to chocolate .............", correctAnswer: "production", placeholder: "10." },
    { id: 11, type: QuestionType.FILL_GAPS, text: "Cacao farming has led to ............. in many producing regions.", correctAnswer: "deforestation", placeholder: "11." },
    { id: 12, type: QuestionType.FILL_GAPS, text: "............. certification guarantees farmers receive a minimum price for their cacao.", correctAnswer: "Fair trade", placeholder: "12." },
    { id: 13, type: QuestionType.FILL_GAPS, text: "There is growing demand for organic and ............. chocolates.", correctAnswer: "specialty", placeholder: "13." },
    { id: 14, type: QuestionType.FILL_GAPS, text: "The global chocolate industry is worth ............. of dollars.", correctAnswer: "billions", placeholder: "14." }
  ],
  // PASSAGE 3 QUESTIONS
  'r-p3-feeding-world': [
    { id: 1, type: QuestionType.TFNG, text: "The global population is projected to decrease by 2050.", correctAnswer: "FALSE" },
    { id: 2, type: QuestionType.TFNG, text: "Technological innovations can help increase agricultural productivity.", correctAnswer: "TRUE" },
    { id: 3, type: QuestionType.TFNG, text: "Smallholder farmers in developing countries have easy access to new technologies.", correctAnswer: "FALSE" },
    { id: 4, type: QuestionType.TFNG, text: "Approximately one-third of all food produced is lost or wasted.", correctAnswer: "TRUE" },
    { id: 5, type: QuestionType.TFNG, text: "Plant-based diets require more resources than meat-based diets.", correctAnswer: "FALSE" },
    { id: 6, type: QuestionType.TFNG, text: "Climate change is affecting crop yields in many regions.", correctAnswer: "TRUE" },
    { id: 7, type: QuestionType.TFNG, text: "Biofuel production has no impact on food production.", correctAnswer: "FALSE" },
    { id: 8, type: QuestionType.TFNG, text: "Addressing food security requires a combination of approaches.", correctAnswer: "TRUE" },
    { id: 9, type: QuestionType.FILL_GAPS, text: "The global population is projected to reach ............. billion by 2050.", correctAnswer: "9.7", placeholder: "9." },
    { id: 10, type: QuestionType.FILL_GAPS, text: "Genetically modified organisms are one approach to increase agricultural .............", correctAnswer: "productivity", placeholder: "10." },
    { id: 11, type: QuestionType.FILL_GAPS, text: "In developing countries, food losses often occur during ............. due to inadequate infrastructure.", correctAnswer: "storage", placeholder: "11." },
    { id: 12, type: QuestionType.FILL_GAPS, text: "Livestock production requires significantly more ............. and water than plant-based foods.", correctAnswer: "land", placeholder: "12." },
    { id: 13, type: QuestionType.FILL_GAPS, text: "Developing climate-............. crop varieties will be essential for food security.", correctAnswer: "resilient", placeholder: "13." },
    { id: 14, type: QuestionType.FILL_GAPS, text: "Integrated strategies must consider the environmental, social, and ............. dimensions of food production.", correctAnswer: "economic", placeholder: "14." }
  ],
  'r-p3-antarctica': [
    { id: 1, type: QuestionType.TFNG, text: "Antarctica is a tropical continent with mild temperatures.", correctAnswer: "FALSE" },
    { id: 2, type: QuestionType.TFNG, text: "The Heroic Age of Antarctic Exploration occurred in the late 19th and early 20th centuries.", correctAnswer: "TRUE" },
    { id: 3, type: QuestionType.TFNG, text: "Roald Amundsen was the first person to reach the South Pole.", correctAnswer: "TRUE" },
    { id: 4, type: QuestionType.TFNG, text: "Robert Falcon Scott survived his expedition to the South Pole.", correctAnswer: "FALSE" },
    { id: 5, type: QuestionType.TFNG, text: "The Antarctic Treaty was signed in the 19th century.", correctAnswer: "FALSE" },
    { id: 6, type: QuestionType.TFNG, text: "Today, over 70 research stations operate in Antarctica.", correctAnswer: "TRUE" },
    { id: 7, type: QuestionType.TFNG, text: "Antarctic ice sheets contain a record of Earth's climate history.", correctAnswer: "TRUE" },
    { id: 8, type: QuestionType.TFNG, text: "Working in Antarctica is easy and inexpensive.", correctAnswer: "FALSE" },
    { id: 9, type: QuestionType.FILL_GAPS, text: "Antarctica covers nearly ............. million square kilometres.", correctAnswer: "14", placeholder: "9." },
    { id: 10, type: QuestionType.FILL_GAPS, text: "The Heroic Age of Antarctic Exploration lasted from roughly 1895 to .............", correctAnswer: "1922", placeholder: "10." },
    { id: 11, type: QuestionType.FILL_GAPS, text: "The International Geophysical Year of 1957-1958 sparked a surge in Antarctic .............", correctAnswer: "research", placeholder: "11." },
    { id: 12, type: QuestionType.FILL_GAPS, text: "The Antarctic ............. of 1959 set aside the continent for peaceful purposes.", correctAnswer: "Treaty", placeholder: "12." },
    { id: 13, type: QuestionType.FILL_GAPS, text: "The West Antarctic Ice Sheet contains enough water to raise global sea levels by several .............", correctAnswer: "metres", placeholder: "13." },
    { id: 14, type: QuestionType.FILL_GAPS, text: "Supplies must be shipped or flown in during the brief Antarctic .............", correctAnswer: "summer", placeholder: "14." }
  ]
};
