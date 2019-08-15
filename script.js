let converterDB = {
	biomarkers: {
		0: {name: 'Insulin',
			unit:
				[['mmol/L', 0          ],
				 ['µmol/L', 0          ], 
				 ['nmol/L', 0          ],
				 ['pmol/L', 6.945      ], // 14 - 140
 				 ['mg/mL' , 0.0347     ], 
				 ['mg/dL' , 0.347      ],
				 ['mg/L'  , 3.47       ], 
				 ['µg/mL' , 0          ],
				 ['µg/dL' , 0          ],
				 ['µg/L'  , 0          ],
				 ['ng/mL' , 0          ], 
 				 ['g'     , 0.0000347  ],
				 ['IU'    , 1          ], 
				 ['µIU/mL', 1          ], // 2.0 - 20
				 ['mIU/L' , 1          ],				  
				],
			},
		1: {name:'Glucose',
			unit: 
				[['mmol/L', 1           ],
				 ['µmol/L', 1000        ], 
				 ['nmol/L', 1000000     ],
				 ['pmol/L', 1000000000  ],
 				 ['mg/mL' , 0.180156    ], 
				 ['mg/dL' , 18.0156     ],
				 ['mg/L'  , 180.156     ], 
				 ['µg/mL' , 180.156     ],
				 ['µg/dL' , 18015.6     ],
				 ['µg/L'  , 180156      ],
				 ['ng/mL' , 180156      ], 
 				 ['g'     , 0           ],
				 ['IU'    , 0           ], 
				 ['µIU/mL', 0           ], 
				 ['mIU/L' , 0           ],				  
				],
			},
		2: {name:'Cholesterol, low-density (LDL) (high level)',
			unit: 
				[['mmol/L', 0.0259      ], // > 4.144
				 ['µmol/L', 0           ], 
				 ['nmol/L', 0           ],
				 ['pmol/L', 0           ],
 				 ['mg/mL' , 0.1         ], 
				 ['mg/dL' , 1           ], // > 160
				 ['mg/L'  , 10          ], 
				 ['µg/mL' , 0           ],
				 ['µg/dL' , 0           ],
				 ['µg/L'  , 0           ],
				 ['ng/mL' , 0           ], 
 				 ['g'     , 0           ],
				 ['IU'    , 0           ], 
				 ['µIU/mL', 0           ], 
				 ['mIU/L' , 0           ],				  
				],
			},
		3: {name:'Cholesterol, high-density (HDL) (low level)',
			unit:
				[['mmol/L', 0.0259      ], // > 1.03
				 ['µmol/L', 0           ], 
				 ['nmol/L', 0           ],
				 ['pmol/L', 0           ],
 				 ['mg/mL' , 0.1         ], 
				 ['mg/dL' , 1           ], // < 40
				 ['mg/L'  , 10          ], 
				 ['µg/mL' , 0           ],
				 ['µg/dL' , 0           ],
				 ['µg/L'  , 0           ],
				 ['ng/mL' , 0           ], 
 				 ['g'     , 0           ],
				 ['IU'    , 0           ], 
				 ['µIU/mL', 0           ], 
				 ['mIU/L' , 0           ],
			},
		4: {name:'Triglycerides (TG)',
			unit: 
				[['mmol/L', 0.0113      ], // 0.14 - 1.82
				 ['µmol/L', 11.2994     ], 
				 ['nmol/L', 0           ],
				 ['pmol/L', 0           ],
 				 ['mg/mL' , 0.1         ], 
				 ['mg/dL' , 1           ], // < 160
				 ['mg/L'  , 10          ], 
				 ['µg/mL' , 0           ],
				 ['µg/dL' , 0           ],
				 ['µg/L'  , 0           ],
				 ['ng/mL' , 0           ], 
 				 ['g'     , 0           ],
				 ['IU'    , 0           ], 
				 ['µIU/mL', 0           ], 
				 ['mIU/L' , 0           ], 
				],
			},	
		5: {name:'CRP (C-reactive protein)',
			unit: 
				[['mmol/L', 0           ],
				 ['µmol/L', 0           ],
				 ['nmol/L', 9.524       ],
				 ['pmol/L', 0           ],
 				 ['mg/mL' , 0           ], 
				 ['mg/dL' , 0           ], 
				 ['mg/L'  , 1           ], 
				 ['µg/mL' , 0           ],
				 ['µg/dL' , 0           ],
				 ['µg/L'  , 0           ],
				 ['ng/mL' , 0           ], 
 				 ['g'     , 0           ],
				 ['IU'    , 0           ], 
				 ['µIU/mL', 0           ], 
				 ['mIU/L' , 0           ], 
				],
			},
		6: {name:'Homocysteine',
			unit:
				[['mmol/L', 0           ],
				 ['µmol/L', 7.397       ], //5 - 15
				 ['nmol/L', 0           ],
				 ['pmol/L', 0           ],
 				 ['mg/mL' , 0           ], 
				 ['mg/dL' , 0           ], 
				 ['mg/L'  , 1           ], //0.68 - 2.02
				 ['µg/mL' , 0           ],
				 ['µg/dL' , 0           ],
				 ['µg/L'  , 0           ],
				 ['ng/mL' , 0           ], 
 				 ['g'     , 0           ],
				 ['IU'    , 0           ], 
				 ['µIU/mL', 0           ], 
				 ['mIU/L' , 0           ], 
				],			 
			},
		7: {name:'Thyrotropin', // проверить вычисление
			unit: 
				[['mmol/L', 0           ],
				 ['µmol/L', 0           ],
				 ['nmol/L', 0           ],
				 ['pmol/L', 0           ],
 				 ['mg/mL' , 0           ], 
				 ['mg/dL' , 0           ], 
				 ['mg/L'  , 0           ],
				 ['µg/mL' , 0           ],
				 ['µg/dL' , 0           ],
				 ['µg/L'  , 0           ],
				 ['ng/mL' , 0           ], 
 				 ['g'     , 0           ],
				 ['IU'    , 0           ], 
				 ['µIU/mL', 1           ], 
				 ['mIU/L' , 1           ], 
				],
			},
		8: {name:'Vitamin D', //проверить вычисление
			unit: 
				[['mmol/L', 0           ],
				 ['µmol/L', 0           ],
				 ['nmol/L', 0           ],
				 ['pmol/L', 0           ],
 				 ['mg/mL' , 0.0000249   ], 
				 ['mg/dL' , 0           ], 
				 ['mg/L'  , 0           ],
				 ['µg/mL' , 0           ],
				 ['µg/dL' , 0           ],
				 ['µg/L'  , 0           ],
				 ['ng/mL' , 0           ], 
 				 ['g'     , 0.0000000249],
				 ['IU'    , 1           ], 
				 ['µIU/mL', 0           ], 
				 ['mIU/L' , 0           ], 
				],
			},	
		9: {name:'Zinc',
			unit: 
				[['mmol/L', 1           ],
				 ['µmol/L', 1000        ], 
				 ['nmol/L', 1000000     ],
				 ['pmol/L', 1000000000  ], 
 				 ['mg/mL' , 0.06538     ],
 				 ['mg/dL' , 6.538       ],
 				 ['mg/L'  , 65.38       ],
				 ['µg/mL' , 65.38       ],
				 ['µg/dL' , 6538        ],
				 ['µg/L'  , 65380       ],
				 ['ng/mL' , 65380       ],
 				 ['g'     , 0           ],
				 ['IU'    , 0           ], 
				 ['µIU/mL', 0           ], 
				 ['mIU/L' , 0           ],  
				],
			},
		10: {name:'Ferritin',
			unit: 
				[['mmol/L', 1           ],
				 ['µmol/L', 1000        ], 
				 ['nmol/L', 1000000     ],
				 ['pmol/L', 1000000000  ], 
 				 ['mg/mL' , 445         ],
 				 ['mg/dL' , 44504       ],
 				 ['mg/L'  , 445038      ],
				 ['µg/mL' , 445038      ],
				 ['µg/dL' , 44503783    ],
				 ['µg/L'  , 445037828   ],
				 ['ng/mL' , 445037828   ],
 				 ['g'     , 0           ],
				 ['IU'    , 0           ], 
				 ['µIU/mL', 0           ], 
				 ['mIU/L' , 0           ],  
				],
			},																				
	},
	units: {
		0:  'mmol/L',
		1:  'µmol/L', // мкмоль/л
		2:  'nmol/l', // наномоль/л
		3:  'pmol/L',
		4:  'mg/mL' , // тоже самое что мг		
		5:  'mg/dL' ,
		6:  'mg/L'  , // мг/л = мкг/мл
		7:  'µg/mL' , // мкг/мл
		8:  'µg/dL' , // мкг/дл
		9:  'µg/L'  , // мкг/л
		10: 'ng/mL' , // нг/мл
		11: 'g'     , // грамм
		12: 'IU'    , // International Unit = МЕ (Международная Единица) = ЕД (Единица Действия). В фармакологии единица дозы вещества, основанная на его биологической активности
		13: 'µIU/mL', // мкМЕ/мл = мкЕд/мл
		14: 'mIU/L' , // мМЕ/л
	}
};

function converter(biomarker, convertFrom, convertTo, value){
	if(isNaN(biomarker)){
    	return "Ошибка! Значение аргумента 'biomarker' не числовое!\n Решение: Введите валидное значение аргумента 'biomarker'";
    	}  
	if(isNaN(convertFrom)){
    	return "Ошибка! Значение аргумента 'convertFrom' не числовое!\n Решение: Введите валидное значение аргумента 'convertFrom'";
 		}
	if(isNaN(convertTo)){
    	return "Ошибка! Значение аргумента 'convertTo' не числовое!\n Решение: Введите валидное значение аргумента 'convertTo'";
 		}  	 
	if(isNaN(value)){
    	return "Ошибка! Значение аргумента 'value' не числовое!\n Решение: Введите валидное значение аргумента 'value'";
 		} 

	let marker = converterDB.biomarkers[biomarker].name;

	let unitFrom = converterDB.biomarkers[biomarker].unit[convertFrom][0]
	let unitTo = converterDB.biomarkers[biomarker].unit[convertTo][0]

	let convFrom = converterDB.biomarkers[biomarker].unit[convertFrom][1];
	let convTo = converterDB.biomarkers[biomarker].unit[convertTo][1];
	
	let result = value * convTo/convFrom;

	console.log('Биомаркер: ' + marker + '\n' + value + ' ' + unitFrom + ' = ' + result + ' ' + unitTo);
	
	return result.toFixed(2);
}

	// Проверка для Инсулина: converter(0,1,6,180)   = 25.9 µIU/mL
	// Проверка для Инсулина: converter(0,6,1,25)    = 173.6 pmol/L
	// Проверка для  Глюкозы: converter(1,0,2,5)       = 90.07795 mg/dL
	// Проверка для  Глюкозы: converter(1,2,0,90)      = 4.9 mmol/L
	// Проверка для      LDL: converter(2,2,0,160)     = 4.14 mmol/L
	// Проверка для      LDL: converter(2,0,2,4)       = 154.4 mg/dL
	// Проверка для      HDL: converter(3,2,0,40)      = 1.036 mmol/L
	// Проверка для      HDL: converter(3,0,2,1)       = 38.6 mg/dL	
	// Проверка для      HDL: converter(3,0,3,1)       = 3.861 mg/dL
	// Проверка для       TG: converter(4,2,0,120)     = 1.36 mmol/L	
	// Проверка для       TG: converter(4,0,2,1.1)     = 97.35 mg/dL
	// Проверка для      CRP: converter(5,9,10,2)      = 19.05 nmol/L
	// Проверка для      CRP: converter(5,10,9,20)     = 2.10 mg/dL
	// Проверка для Homocysteine: convert(6,9,8,1.5) = 11.1 µmol/L
	// Проверка для Homocysteine: convert(6,8,9,11)  = 1.49 mg/L
	// Проверка для Homocysteine: convert(7,6,7,1.5) = 1.5 mIU/L
	// Проверка для Homocysteine: convert(7,7,6,1.5)  = 1.5 µIU/mL	






