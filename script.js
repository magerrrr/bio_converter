let converterDB = {
	biomarkers: {
		0: {name: 'Insulin',
			unit:
				[['mmol/L', 0],
				 ['pmol/L', 6.945], // 14-140 нормальный диапазон
				 ['mg/dL',  0.347], 
 				 ['mg/mL',  0.0347],
 				 ['g',      0.0000347],
				 ['IU',     1], 
				 ['µIU/mL', 1], // 2.0-20 нормальный диапазон
				 ['mIU/L',  1], 
				],
			},
		1: {name:'Glucose',
			unit: 
				[['mmol/L', 1],
				 ['pmol/L', 1000000000],
				 ['mg/dL',  18.01559],
				],
			},
		2: {name:'Cholesterol, low-density (LDL) (high level)',
			unit: 
				[['mmol/L', 0.0259], // > 4.144
				 ['pmol/L', 0], 
				 ['mg/dL',  1], // > 160
 				 ['mg/mL',  0],
 				 ['g',      0],
				 ['IU',     0], 
				 ['µIU/mL', 0], 
				 ['mIU/L',  0], 
				],
			},			
	},
	units: {
		0: 'mmol/L',
		1: 'pmol/L',
		2: 'mg/dL',
		3: 'mg/mL', // тоже самое что мг
		4: 'g', // грамм
		5: 'IU', // International Unit = МЕ (Международная Единица) = ЕД (Единица Действия). В фармакологии единица дозы вещества, основанная на его биологической активности
		6: 'µIU/mL', // мкМЕ/мл = мкЕд/мл
		7: 'mIU/L', // мМЕ/л
	}
};

function converter(biomarker, convertFrom, convertTo, value){
	// Проверка для Инсулина: converter(0,1,6,180) = 25.9 µIU/mL
	// Проверка для Инсулина: converter(0,6,1,25)  = 173.6 pmol/L
	// Проверка для  Глюкозы: convert(1,0,2,5)     = 90.07795 mg/dL
	// Проверка для  Глюкозы: convert(1,1,0,90)    = 4.9 mmol/L
	// Проверка для      LDL: convert(2,2,1,160)   = 4.14 mmol/L
	// Проверка для      LDL: convert(2,1,0,90)    = 4.9 mmol/L
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

	console.log('Результат(' + marker + '): ' + value + ' ' + unitFrom + ' = ' + result + ' ' + unitTo);
	return result;
}