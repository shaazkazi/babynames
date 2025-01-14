const names = [
    {
      name: "Abdul Ahad",
      meaning: "Servant of the One",
      gender: "boy",
      letter: "A",
      origins: ["Islamic", "Arabic"],
      variations: ["Ahad"],
      translations: {
        arabic: "عبد الأحد",
        urdu: "عبد الاحد",
        hindi: "अब्दुल अहद",
        bangla: "আব্দুল আহাদ"
      }
    },
    {
      name: "Aisha",
      meaning: "Alive, Living, Prosperous",
      gender: "girl",
      letter: "A",
      origins: ["Islamic", "Arabic"],
      variations: ["Ayesha", "Aysha"],
      translations: {
        arabic: "عائشة",
        urdu: "عائشہ",
        hindi: "आइशा",
        bangla: "আইশা"
      }
    },
    {
      name: "Bilal",
      meaning: "Moistening, Freshness",
      gender: "boy",
      letter: "B",
      origins: ["Islamic", "Arabic"],
      variations: [],
      translations: {
        arabic: "بلال",
        urdu: "بلال",
        hindi: "बिलाल",
        bangla: "বিলাল"
      }
    },
    {
      name: "Fatima",
      meaning: "Captivating, Abstainer",
      gender: "girl",
      letter: "F",
      origins: ["Islamic", "Arabic"],
      variations: ["Fatimah", "Fatema"],
      translations: {
        arabic: "فاطمة",
        urdu: "فاطمہ",
        hindi: "फातिमा",
        bangla: "ফাতিমা"
      }
    },
    {
      name: "Hassan",
      meaning: "Beautiful, Handsome",
      gender: "boy",
      letter: "H",
      origins: ["Islamic", "Arabic"],
      variations: ["Hasan", "Husayn"],
      translations: {
        arabic: "حسن",
        urdu: "حسن",
        hindi: "हसन",
        bangla: "হাসান"
      }
    },
    {
      name: "Maryam",
      meaning: "Beloved, Pious",
      gender: "girl",
      letter: "M",
      origins: ["Islamic", "Arabic"],
      variations: ["Mariam", "Marya"],
      translations: {
        arabic: "مريم",
        urdu: "مریم",
        hindi: "मरियम",
        bangla: "মরিয়ম"
      }
    },
    {
      name: "Omar",
      meaning: "Flourishing, Long-Lived",
      gender: "boy",
      letter: "O",
      origins: ["Islamic", "Arabic"],
      variations: ["Umar"],
      translations: {
        arabic: "عمر",
        urdu: "عمر",
        hindi: "उमर",
        bangla: "উমর"
      }
    },
    {
      name: "Zainab",
      meaning: "Fragrant Flower, Father's Pride",
      gender: "girl",
      letter: "Z",
      origins: ["Islamic", "Arabic"],
      variations: ["Zaynab", "Zaineb"],
      translations: {
        arabic: "زينب",
        urdu: "زینب",
        hindi: "जैनब",
        bangla: "জয়নব"
      }
    },
    {
      name: "Yusuf",
      meaning: "God Increases",
      gender: "boy",
      letter: "Y",
      origins: ["Islamic", "Arabic", "Hebrew"],
      variations: ["Yousef", "Yosuf"],
      translations: {
        arabic: "يوسف",
        urdu: "یوسف",
        hindi: "यूसुफ़",
        bangla: "ইউসুফ"
      }
    },
    {
      name: "Khadijah",
      meaning: "Premature Child, Trustworthy",
      gender: "girl",
      letter: "K",
      origins: ["Islamic", "Arabic"],
      variations: ["Khadija", "Khadijah"],
      translations: {
        arabic: "خديجة",
        urdu: "خدیجہ",
        hindi: "खदीजा",
        bangla: "খাদিজা"
      }
    },
    {
        name: "Ibrahim",
        meaning: "Father of Nations",
        gender: "boy",
        letter: "I",
        origins: ["Islamic", "Arabic", "Hebrew"],
        variations: ["Ebrahim", "Ibraheem"],
        translations: {
          arabic: "إبراهيم",
          urdu: "ابراہیم",
          hindi: "इब्राहीम",
          bangla: "ইব্রাহিম"
        }
      },
      {
        name: "Zara",
        meaning: "Princess, Blossom, Radiance",
        gender: "girl",
        letter: "Z",
        origins: ["Islamic", "Arabic"],
        variations: ["Zahra", "Zarah"],
        translations: {
          arabic: "زارة",
          urdu: "زارا",
          hindi: "ज़ारा",
          bangla: "জারা"
        }
      },
      {
        name: "Noah",
        meaning: "Rest, Comfort",
        gender: "boy",
        letter: "N",
        origins: ["Islamic", "Arabic", "Hebrew"],
        variations: ["Nuh"],
        translations: {
          arabic: "نوح",
          urdu: "نوح",
          hindi: "नूह",
          bangla: "নূহ"
        }
      },
      {
        name: "Amina",
        meaning: "Trustworthy, Faithful",
        gender: "girl",
        letter: "A",
        origins: ["Islamic", "Arabic"],
        variations: ["Aminah"],
        translations: {
          arabic: "أمينة",
          urdu: "آمنہ",
          hindi: "आमिना",
          bangla: "আমিনা"
        }
      },
      {
        name: "Ismail",
        meaning: "God Will Hear",
        gender: "boy",
        letter: "I",
        origins: ["Islamic", "Arabic", "Hebrew"],
        variations: ["Ishmael"],
        translations: {
          arabic: "إسماعيل",
          urdu: "اسماعیل",
          hindi: "इस्माइल",
          bangla: "ইসমাইল"
        }
      },
      {
        name: "Aaliya",
        meaning: "Exalted, Noble, High",
        gender: "girl",
        letter: "A",
        origins: ["Islamic", "Arabic"],
        variations: ["Aliyah", "Aleya"],
        translations: {
          arabic: "عالية",
          urdu: "عالیہ",
          hindi: "आलिया",
          bangla: "আলিয়া"
        }
      },
      {
        name: "Tariq",
        meaning: "Morning Star, Night Visitor",
        gender: "boy",
        letter: "T",
        origins: ["Islamic", "Arabic"],
        variations: ["Tarik", "Tareq"],
        translations: {
          arabic: "طارق",
          urdu: "طارق",
          hindi: "तारीक",
          bangla: "তারিক"
        }
      },
      {
        name: "Hafsa",
        meaning: "Young Lioness, Gathering",
        gender: "girl",
        letter: "H",
        origins: ["Islamic", "Arabic"],
        variations: ["Hafsah", "Hafzah"],
        translations: {
          arabic: "حفصة",
          urdu: "حفصہ",
          hindi: "हफ़्सा",
          bangla: "হাফসা"
        }
      },
      {
        name: "Salman",
        meaning: "Safe, Peaceful",
        gender: "boy",
        letter: "S",
        origins: ["Islamic", "Arabic", "Persian"],
        variations: ["Salmaan"],
        translations: {
          arabic: "سلمان",
          urdu: "سلمان",
          hindi: "सलमान",
          bangla: "সালমান"
        }
      },
      {
        name: "Nadia",
        meaning: "Caller, Announcer, Generous",
        gender: "girl",
        letter: "N",
        origins: ["Islamic", "Arabic"],
        variations: ["Nadiyah", "Nadiya"],
        translations: {
          arabic: "نادية",
          urdu: "نادیہ",
          hindi: "नादिया",
          bangla: "নাদিয়া"
        }
      },
      {
        name: "Ali",
        meaning: "Exalted, Noble, High",
        gender: "boy",
        letter: "A",
        origins: ["Islamic", "Arabic"],
        variations: ["Aly"],
        translations: {
          arabic: "علي",
          urdu: "علی",
          hindi: "अली",
          bangla: "আলি"
        }
      },
      {
        name: "Ayesha",
        meaning: "Alive, Living, Prosperous",
        gender: "girl",
        letter: "A",
        origins: ["Islamic", "Arabic"],
        variations: ["Aisha", "Aysha"],
        translations: {
          arabic: "عائشة",
          urdu: "عائشہ",
          hindi: "आयशा",
          bangla: "আয়েশা"
        }
      },
      {
        name: "Yahya",
        meaning: "Alive, Living",
        gender: "boy",
        letter: "Y",
        origins: ["Islamic", "Arabic"],
        variations: ["John", "Yaya"],
        translations: {
          arabic: "يحيى",
          urdu: "یحییٰ",
          hindi: "यहया",
          bangla: "ইয়াহইয়া"
        }
      },
      {
        name: "Sana",
        meaning: "Radiance, Brilliance",
        gender: "girl",
        letter: "S",
        origins: ["Islamic", "Arabic"],
        variations: ["Sanaa", "Sanah"],
        translations: {
          arabic: "سناء",
          urdu: "ثناء",
          hindi: "सना",
          bangla: "সানা"
        }
      },
      {
        name: "Adnan",
        meaning: "Settler, Pioneer",
        gender: "boy",
        letter: "A",
        origins: ["Islamic", "Arabic"],
        variations: [],
        translations: {
          arabic: "عدنان",
          urdu: "عدنان",
          hindi: "अदनान",
          bangla: "আদনান"
        }
      },
      {
        name: "Hiba",
        meaning: "Gift, Blessing",
        gender: "girl",
        letter: "H",
        origins: ["Islamic", "Arabic"],
        variations: ["Hibah"],
        translations: {
          arabic: "هبة",
          urdu: "ھبہ",
          hindi: "हिबा",
          bangla: "হিবা"
        }
      },
      {
        name: "Hamza",
        meaning: "Lion, Brave",
        gender: "boy",
        letter: "H",
        origins: ["Islamic", "Arabic"],
        variations: ["Hamzah"],
        translations: {
          arabic: "حمزة",
          urdu: "حمزہ",
          hindi: "हमजा",
          bangla: "হামজা"
        }
      },
      {
        name: "Rania",
        meaning: "Gazing, Contented",
        gender: "girl",
        letter: "R",
        origins: ["Islamic", "Arabic"],
        variations: ["Raniya", "Raniyah"],
        translations: {
          arabic: "رانية",
          urdu: "رانیہ",
          hindi: "रानिया",
          bangla: "রানিয়া"
        }
      },
      {
        name: "Khalid",
        meaning: "Eternal, Immortal",
        gender: "boy",
        letter: "K",
        origins: ["Islamic", "Arabic"],
        variations: ["Khaled"],
        translations: {
          arabic: "خالد",
          urdu: "خالد",
          hindi: "खालिद",
          bangla: "খালিদ"
        }
      },
      {
        name: "Amna",
        meaning: "Peaceful, Safe",
        gender: "girl",
        letter: "A",
        origins: ["Islamic", "Arabic"],
        variations: ["Aamna", "Amnah"],
        translations: {
          arabic: "آمنة",
          urdu: "آمنہ",
          hindi: "आमना",
          bangla: "আমনা"
        }
      },
      {
        name: "Zubair",
        meaning: "Strong, Courageous",
        gender: "boy",
        letter: "Z",
        origins: ["Islamic", "Arabic"],
        variations: ["Zubayr"],
        translations: {
          arabic: "زبير",
          urdu: "زبیر",
          hindi: "जुबैर",
          bangla: "জুবাইর"
        }
      },
      {
        name: "Layla",
        meaning: "Night, Dark Beauty",
        gender: "girl",
        letter: "L",
        origins: ["Islamic", "Arabic"],
        variations: ["Laila", "Leila"],
        translations: {
          arabic: "ليلى",
          urdu: "لیلیٰ",
          hindi: "लैला",
          bangla: "লায়লা"
        }
      },
      {
        name: "Saad",
        meaning: "Happiness, Prosperity",
        gender: "boy",
        letter: "S",
        origins: ["Islamic", "Arabic"],
        variations: [],
        translations: {
          arabic: "سعد",
          urdu: "سعد",
          hindi: "साद",
          bangla: "সাদ"
        }
      },
      {
        name: "Shifa",
        meaning: "Cure, Healing",
        gender: "girl",
        letter: "S",
        origins: ["Islamic", "Arabic"],
        variations: [],
        translations: {
          arabic: "شفاء",
          urdu: "شفا",
          hindi: "शिफा",
          bangla: "শিফা"
        }
      },
      {
        name: "Rayan",
        meaning: "Gates of Heaven, Luxuriant",
        gender: "boy",
        letter: "R",
        origins: ["Islamic", "Arabic"],
        variations: ["Rayyan"],
        translations: {
          arabic: "ريان",
          urdu: "ریان",
          hindi: "रयान",
          bangla: "রায়ান"
        }
      },
      {
        name: "Haleema",
        meaning: "Gentle, Mild-Mannered",
        gender: "girl",
        letter: "H",
        origins: ["Islamic", "Arabic"],
        variations: ["Halima"],
        translations: {
          arabic: "حليمة",
          urdu: "حلیمہ",
          hindi: "हलीमा",
          bangla: "হালিমা"
        }
      },
      {
        name: "Fahad",
        meaning: "Leopard, Panther",
        gender: "boy",
        letter: "F",
        origins: ["Islamic", "Arabic"],
        variations: ["Fahed"],
        translations: {
          arabic: "فهد",
          urdu: "فہد",
          hindi: "फहद",
          bangla: "ফাহাদ"
        }
      },
      {
        name: "Mariam",
        meaning: "Beloved, Pious",
        gender: "girl",
        letter: "M",
        origins: ["Islamic", "Arabic"],
        variations: ["Maryam"],
        translations: {
          arabic: "مريم",
          urdu: "مریم",
          hindi: "मरियम",
          bangla: "মরিয়ম"
        }
      },
      {
        name: "Zayd",
        meaning: "Growth, Abundance",
        gender: "boy",
        letter: "Z",
        origins: ["Islamic", "Arabic"],
        variations: ["Zaid"],
        translations: {
          arabic: "زيد",
          urdu: "زید",
          hindi: "ज़ैद",
          bangla: "জায়েদ"
        }
      },
      {
        name: "Rumaisa",
        meaning: "Bouquet, Gift of Flowers",
        gender: "girl",
        letter: "R",
        origins: ["Islamic", "Arabic"],
        variations: ["Rumaiza"],
        translations: {
          arabic: "رميصاء",
          urdu: "رمیصاء",
          hindi: "रुमैसा",
          bangla: "রুমাইসা"
        }
      },
      {
        name: "Anas",
        meaning: "Friendly, Affectionate",
        gender: "boy",
        letter: "A",
        origins: ["Islamic", "Arabic"],
        variations: [],
        translations: {
          arabic: "أنس",
          urdu: "انس",
          hindi: "अनस",
          bangla: "আনাস"
        }
      },
      {
        name: "Fatima",
        meaning: "Captivating, Abstinent",
        gender: "girl",
        letter: "F",
        origins: ["Islamic", "Arabic"],
        variations: ["Faatima", "Fatimah"],
        translations: {
          arabic: "فاطمة",
          urdu: "فاطمہ",
          hindi: "फातिमा",
          bangla: "ফাতিমা"
        }
      },
      {
        name: "Bilal",
        meaning: "Moisture, Freshness",
        gender: "boy",
        letter: "B",
        origins: ["Islamic", "Arabic"],
        variations: [],
        translations: {
          arabic: "بلال",
          urdu: "بلال",
          hindi: "बिलाल",
          bangla: "বিলাল"
        }
      },
      {
        name: "Zainab",
        meaning: "Fragrant Flower, Father’s Precious Jewel",
        gender: "girl",
        letter: "Z",
        origins: ["Islamic", "Arabic"],
        variations: ["Zaynab", "Zainub"],
        translations: {
          arabic: "زينب",
          urdu: "زینب",
          hindi: "जैनब",
          bangla: "জাইনব"
        }
      },
      {
        name: "Omar",
        meaning: "Long-Lived, Flourishing",
        gender: "boy",
        letter: "O",
        origins: ["Islamic", "Arabic"],
        variations: ["Umar"],
        translations: {
          arabic: "عمر",
          urdu: "عمر",
          hindi: "उमर",
          bangla: "উমর"
        }
      },
      {
        name: "Maha",
        meaning: "Wild Cow, Beautiful Eyes",
        gender: "girl",
        letter: "M",
        origins: ["Islamic", "Arabic"],
        variations: [],
        translations: {
          arabic: "مها",
          urdu: "مہا",
          hindi: "मह",
          bangla: "মাহা"
        }
      },
      {
        name: "Farhan",
        meaning: "Happy, Joyful",
        gender: "boy",
        letter: "F",
        origins: ["Islamic", "Arabic"],
        variations: ["Farhaan"],
        translations: {
          arabic: "فرحان",
          urdu: "فرحان",
          hindi: "फ़रहान",
          bangla: "ফারহান"
        }
      },
      {
        name: "Noor",
        meaning: "Light, Radiance",
        gender: "girl",
        letter: "N",
        origins: ["Islamic", "Arabic"],
        variations: ["Nour", "Noorah"],
        translations: {
          arabic: "نور",
          urdu: "نور",
          hindi: "नूर",
          bangla: "নূর"
        }
      },
      {
        name: "Hussain",
        meaning: "Handsome, Beautiful",
        gender: "boy",
        letter: "H",
        origins: ["Islamic", "Arabic"],
        variations: ["Hussein"],
        translations: {
          arabic: "حسين",
          urdu: "حسین",
          hindi: "हुसैन",
          bangla: "হুসাইন"
        }
      },
      {
        name: "Samina",
        meaning: "Healthy, Precious",
        gender: "girl",
        letter: "S",
        origins: ["Islamic", "Arabic"],
        variations: ["Sameena"],
        translations: {
          arabic: "سمينة",
          urdu: "سمینہ",
          hindi: "समीना",
          bangla: "সামিনা"
        }
      },
      {
        name: "Qasim",
        meaning: "Distributor, Dividing",
        gender: "boy",
        letter: "Q",
        origins: ["Islamic", "Arabic"],
        variations: ["Kasim"],
        translations: {
          arabic: "قاسم",
          urdu: "قاسم",
          hindi: "क़ासिम",
          bangla: "কাসিম"
        }
      },
      {
        name: "Tasnim",
        meaning: "Fountain in Paradise",
        gender: "girl",
        letter: "T",
        origins: ["Islamic", "Arabic"],
        variations: ["Tasneem"],
        translations: {
          arabic: "تسنيم",
          urdu: "تسنیم",
          hindi: "तस्नीम",
          bangla: "তাসনিম"
        }
      },
      {
        name: "Yusuf",
        meaning: "God Increases, God Gives",
        gender: "boy",
        letter: "Y",
        origins: ["Islamic", "Arabic", "Hebrew"],
        variations: ["Yousuf"],
        translations: {
          arabic: "يوسف",
          urdu: "یوسف",
          hindi: "यूसुफ",
          bangla: "ইউসুফ"
        }
      },
      {
        name: "Areeba",
        meaning: "Wise, Intelligent",
        gender: "girl",
        letter: "A",
        origins: ["Islamic", "Arabic"],
        variations: ["Ariba"],
        translations: {
          arabic: "أريبة",
          urdu: "اریبہ",
          hindi: "अरिबा",
          bangla: "আরিবা"
        }
      },
      {
        name: "Faisal",
        meaning: "Decisive, Judge",
        gender: "boy",
        letter: "F",
        origins: ["Islamic", "Arabic"],
        variations: [],
        translations: {
          arabic: "فيصل",
          urdu: "فیصل",
          hindi: "फैसल",
          bangla: "ফয়সাল"
        }
      },
      {
        name: "Nayla",
        meaning: "Acquirer, Achiever",
        gender: "girl",
        letter: "N",
        origins: ["Islamic", "Arabic"],
        variations: ["Naila"],
        translations: {
          arabic: "نايلة",
          urdu: "نائلہ",
          hindi: "नायला",
          bangla: "নায়লা"
        }
      },
      {
        name: "Shahid",
        meaning: "Witness, Martyr",
        gender: "boy",
        letter: "S",
        origins: ["Islamic", "Arabic"],
        variations: [],
        translations: {
          arabic: "شهيد",
          urdu: "شہید",
          hindi: "शहीद",
          bangla: "শহীদ"
        }
      },
      {
        name: "Zoya",
        meaning: "Alive, Life, Loving",
        gender: "girl",
        letter: "Z",
        origins: ["Islamic", "Arabic", "Persian"],
        variations: ["Zoeya"],
        translations: {
          arabic: "زويا",
          urdu: "زویا",
          hindi: "जोया",
          bangla: "জোয়া"
        }
      },
      {
        name: "Kareem",
        meaning: "Generous, Noble",
        gender: "boy",
        letter: "K",
        origins: ["Islamic", "Arabic"],
        variations: ["Karim"],
        translations: {
          arabic: "كريم",
          urdu: "کریم",
          hindi: "करीम",
          bangla: "করিম"
        }
      },
      {
        name: "Hadia",
        meaning: "Guide to Righteousness",
        gender: "girl",
        letter: "H",
        origins: ["Islamic", "Arabic"],
        variations: ["Hadiyah"],
        translations: {
          arabic: "هادية",
          urdu: "ھادیہ",
          hindi: "हादिया",
          bangla: "হাদিয়া"
        }
      }
  ]
  