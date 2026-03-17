const QUESTION_BANK = {

quran: { tests: [ testTemplate("القرآن",1), testTemplate("القرآن",2), testTemplate("القرآن",3) ] },

math: { tests: [ testTemplate("الرياضيات",1), testTemplate("الرياضيات",2), testTemplate("الرياضيات",3) ] },

islamic: { tests: [ testTemplate("التربية الإسلامية",1), testTemplate("التربية الإسلامية",2), testTemplate("التربية الإسلامية",3) ] },

arabic: { tests: [ testTemplate("اللغة العربية",1), testTemplate("اللغة العربية",2), testTemplate("اللغة العربية",3) ] },

english: { tests: [ testTemplate("اللغة الإنجليزية",1), testTemplate("اللغة الإنجليزية",2), testTemplate("اللغة الإنجليزية",3) ] },

chemistry: { tests: [ testTemplate("الكيمياء",1), testTemplate("الكيمياء",2), testTemplate("الكيمياء",3) ] },

biology: { tests: [ testTemplate("الأحياء",1), testTemplate("الأحياء",2), testTemplate("الأحياء",3) ] },

physics: { tests: [ testTemplate("الفيزياء",1), testTemplate("الفيزياء",2), testTemplate("الفيزياء",3) ] }

};



/* =======================================
قالب الاختبار
======================================= */

function testTemplate(subjectName, testNumber){

return {
title: `اختبار ${subjectName} رقم ${testNumber}`,
questions: []
};

}



/* =======================================
دالة إضافة سؤال لأي مادة
======================================= */

function addQuestion(subject, testIndex, question){

if(!QUESTION_BANK[subject]){
console.error("المادة غير موجودة");
return;
}

if(!QUESTION_BANK[subject].tests[testIndex]){
console.error("الاختبار غير موجود");
return;
}

QUESTION_BANK[subject].tests[testIndex].questions.push(question);

}



/* =======================================
أمثلة إضافة أسئلة
يمكنك حذفها وتعديلها
======================================= */


/* ========= القرآن ========= */

addQuestion("quran",0,{type:"tf",question:"يسمى العلم الذي يبحث في أحكام المواريث علم الفرائض",answer:"true"});
addQuestion("quran",0,{type:"tf",question:"يجوز للرجل أن يتحدث عن أسرار بيته أمام أصدقائه للفكاهة",answer:"false"});
addQuestion("quran",0,{type:"tf",question:"التربية الحسنة للأبناء تعتبر من أهم الحقوق التي أوجبها الإسلام",answer:"true"});
addQuestion("quran",0,{type:"tf",question:"الإعجاز التشريعي يظهر في دقة توزيع المواريث وتحقيق العدالة",answer:"true"});
addQuestion("quran",0,{type:"tf",question:"الاعتقاد بوجود قوى تدبر الكون غير الله يقدح في توحيد الألوهية",answer:"true"});
addQuestion("quran",0,{type:"tf",question:"الإشاعة الكاذبة تهدف إلى زعزعة الأمن النفسي للمجتمع",answer:"true"});
addQuestion("quran",0,{type:"tf",question:"المسلم الحق هو من سلم المسلمون من لسانه ويده",answer:"true"});
addQuestion("quran",0,{type:"tf",question:"صلاة الجماعة تفضل صلاة الفرد بسبع وعشرين درجة",answer:"true"});
addQuestion("quran",0,{type:"tf",question:"التوبة الصادقة تجب ما قبلها من الذنوب مهما كانت",answer:"true"});
addQuestion("quran",0,{type:"tf",question:"من شروط المفسر أن يكون عالماً باللغة العربية وأصول الدين",answer:"true"});
addQuestion("quran",0,{type:"tf",question:"الغلو في الدين هو مجاوزة الحد في العبادة أو الاعتقاد",answer:"true"});
addQuestion("quran",0,{type:"tf",question:"بر الوالدين يقتصر على الأم فقط لأنها الأكثر تعباً",answer:"false"});
addQuestion("quran",0,{type:"tf",question:"الزواج في الإسلام آية من آيات الله لتحقيق السكن والمودة",answer:"true"});
addQuestion("quran",0,{type:"tf",question:"الفساد المالي يقتصر فقط على سرقة الأموال العامة",answer:"false"});
addQuestion("quran",0,{type:"tf",question:"الجهل هو السبب الرئيسي وراء وقوع الناس في البدع والخرافات",answer:"true"});
addQuestion("quran",0,{type:"tf",question:"يجوز للمرأة أن تخرج للعمل إذا التزمت بالضوابط الشرعية",answer:"true"});
addQuestion("quran",0,{type:"tf",question:"العدل هو إعطاء كل ذي حق حقه دون محاباة",answer:"true"});
addQuestion("quran",0,{type:"tf",question:"الكافر يجازى على أعماله الحسنة في الدنيا بالصحة والمال",answer:"true"});
addQuestion("quran",0,{type:"tf",question:"السنة النبوية هي المصدر الثاني للتشريع الإسلامي",answer:"true"});
addQuestion("quran",0,{type:"tf",question:"يثاب المسلم على نيته الحسنة وإن لم يتمكن من فعل العمل",answer:"true"});


addQuestion("quran",0,{type:"mcq",question:"قال تعالى (وتوبوا إلى الله جميعاً أيها المؤمنون) يدل على أن التوبة:",options:["اختيارية","واجبة على كل مؤمن","خاصة بالعصاة","مستحبة"],answer:"واجبة على كل مؤمن"});

addQuestion("quran",0,{type:"mcq",question:"الهدف من قوله تعالى (لعلكم تعقلون) في نهاية الآيات التشريعية:",options:["التخويف","التنبيه لإدراك الحكمة","المدح","الذم"],answer:"التنبيه لإدراك الحكمة"});

addQuestion("quran",0,{type:"mcq",question:"تفسير القرآن بالمأثور هو التفسير المستند إلى:",options:["الهوى","القرآن والسنة وأقوال الصحابة","العقل فقط","اللغة فقط"],answer:"القرآن والسنة وأقوال الصحابة"});

addQuestion("quran",0,{type:"mcq",question:"من الوسائل التي عالج بها الإسلام الفقر:",options:["الزكاة والصدقات","الحرمان","الكسل","الربا"],answer:"الزكاة والصدقات"});

addQuestion("quran",0,{type:"mcq",question:"الصحابي الذي لقب بترجمان القرآن هو:",options:["عمر بن الخطاب","ابن عباس","ابن مسعود","علي بن أبي طالب"],answer:"ابن عباس"});

addQuestion("quran",0,{type:"mcq",question:"المقصود بالثقلين في قوله تعالى أيها الثقلان:",options:["الشمس والقمر","الإنس والجن","الجبال والبحار","الذهب والفضة"],answer:"الإنس والجن"});

addQuestion("quran",0,{type:"mcq",question:"تعتبر الأمانة من أهم سمات:",options:["التاجر فقط","المؤمن في كل شؤونه","الموظف فقط","الحاكم فقط"],answer:"المؤمن في كل شؤونه"});

addQuestion("quran",0,{type:"mcq",question:"من آثار العمل الصالح على المجتمع:",options:["انتشار الحقد","شيوع الأمن والمحبة","التفكك","الفقر"],answer:"شيوع الأمن والمحبة"});

addQuestion("quran",0,{type:"mcq",question:"الاستخلاف في الأرض يقتضي من المسلم:",options:["عمارة الأرض وفق شرع الله","تدمير الطبيعة","الانعزال","التواكل"],answer:"عمارة الأرض وفق شرع الله"});

addQuestion("quran",0,{type:"mcq",question:"توفيت السيدة خديجة رضي الله عنها في:",options:["عام الفيل","عام الحزن","عام الهجرة","عام الفتح"],answer:"عام الحزن"});

addQuestion("quran",0,{type:"mcq",question:"أهم حق للميت على الأحياء هو:",options:["النواح عليه","قضاء دينه والدعاء له","نسيانه","توزيع ماله سراً"],answer:"قضاء دينه والدعاء له"});

addQuestion("quran",0,{type:"mcq",question:"الإعجاز العلمي في القرآن يخاطب:",options:["العاطفة","العقل والعلم الحديث","الخيال","التاريخ القديم"],answer:"العقل والعلم الحديث"});

addQuestion("quran",0,{type:"mcq",question:"الورثة الذين لا يحجبون حجب حرمان أبداً هم:",options:["الأعمام","الأبوان والولدان والزوجان","الإخوة","الجد والجدة"],answer:"الأبوان والولدان والزوجان"});

addQuestion("quran",0,{type:"mcq",question:"عقوبة القاتل عمداً في الإسلام إذا لم يعف ولي الدم:",options:["السجن","القصاص","الغرامة","النفي"],answer:"القصاص"});

addQuestion("quran",0,{type:"mcq",question:"من طرق كسب المال المحرمة في الإسلام:",options:["التجارة","الزراعة","الربا والقمار","الإجارة"],answer:"الربا والقمار"});

addQuestion("quran",0,{type:"mcq",question:"معنى المباهلة في الاصطلاح الشرعي:",options:["الملاعبة","الملاعنة والدعاء على الكاذب","المبارزة","المفاخرة"],answer:"الملاعنة والدعاء على الكاذب"});

addQuestion("quran",0,{type:"mcq",question:"تعتبر التقوى هي الميزان الوحيد للتفاضل بين الناس عند:",options:["الناس","الله تعالى","الملوك","التجار"],answer:"الله تعالى"});

addQuestion("quran",0,{type:"mcq",question:"من واجبات الدولة تجاه مواطنيها:",options:["توفير الأمن والعدل","الظلم","إهمال الصحة","منع التعليم"],answer:"توفير الأمن والعدل"});

addQuestion("quran",0,{type:"mcq",question:"الحكمة من مشروعية الميراث هي:",options:["تفتيت الثروة ومنع الاحتكار","جمع المال لشخص واحد","الفتنة","التعقيد"],answer:"تفتيت الثروة ومنع الاحتكار"});

addQuestion("quran",0,{type:"mcq",question:"من شروط صحة الصلاة:",options:["الغنى","طهارة الثوب والبدن والمكان","القوة","السفر"],answer:"طهارة الثوب والبدن والمكان"});

addQuestion("quran",0,{type:"mcq",question:"أهم مرجع لفهم مراد الله من كلامه هو:",options:["كتب القصص","السنة النبوية الصحيحة","الفلسفة","الشعر"],answer:"السنة النبوية الصحيحة"});

addQuestion("quran",0,{type:"mcq",question:"الهدف من قصص الأنبياء في القرآن:",options:["التسلية","أخذ العبرة وتثبيت فؤاد النبي","الإطالة","سرد التاريخ فقط"],answer:"أخذ العبرة وتثبيت فؤاد النبي"});

addQuestion("quran",0,{type:"mcq",question:"الأسرة القوية تقوم على:",options:["المودة والرحمة والتقوى","المال فقط","الجمال فقط","النسب فقط"],answer:"المودة والرحمة والتقوى"});

addQuestion("quran",0,{type:"mcq",question:"في قوله تعالى وأحسنوا إن الله يحب المحسنين دعوة إلى:",options:["الإتقان في كل شيء","الكسل","الإسراف","البخل"],answer:"الإتقان في كل شيء"});

addQuestion("quran",0,{type:"mcq",question:"الحكم الشرعي للتدخين والمخدرات:",options:["الإباحة","التحريم لضررها","الكراهة","الندب"],answer:"التحريم لضررها"});

addQuestion("quran",0,{type:"mcq",question:"أول من آمن من الرجال بالرسول ﷺ:",options:["عمر بن الخطاب","أبو بكر الصديق","علي بن أبي طالب","عثمان بن عفان"],answer:"أبو بكر الصديق"});

addQuestion("quran",0,{type:"mcq",question:"من حقوق الطريق في الإسلام:",options:["كف الأذى ورد السلام","إلقاء القمامة","الجلوس للمضايقة","الصراخ"],answer:"كف الأذى ورد السلام"});

addQuestion("quran",0,{type:"mcq",question:"سورة تسمى سورة الآداب:",options:["البقرة","النور","يس","الكهف"],answer:"النور"});

addQuestion("quran",0,{type:"mcq",question:"معنى التوكل على الله:",options:["ترك العمل","الأخذ بالأسباب مع الاعتماد على الله","العجز","التواكل"],answer:"الأخذ بالأسباب مع الاعتماد على الله"});

addQuestion("quran",0,{type:"mcq",question:"لقب الصحابي خالد بن الوليد:",options:["الفاروق","سيف الله المسلول","أمين الأمة","حواري الرسول"],answer:"سيف الله المسلول"});
addQuestion("quran",1,{type:"tf",question:"يجوز الجمع بين الجلد والرجم للبكر",answer:"false"});
addQuestion("quran",1,{type:"tf",question:"يثير اللعن في الشهادة الخامسة داخل الملاعن إحساس بالخزي والعار",answer:"true"});
addQuestion("quran",1,{type:"tf",question:"المسلم يكتفي بتجنب نقل الإشاعة عند التأكد من كذبها",answer:"false"});
addQuestion("quran",1,{type:"tf",question:"معنى قوله تعالى (يأتل) أي يقسم الأموال",answer:"false"});
addQuestion("quran",1,{type:"tf",question:"القرآن الكريم معجزة محمد ﷺ",answer:"true"});
addQuestion("quran",1,{type:"tf",question:"تطلق كلمة القرء على النفساء",answer:"false"});
addQuestion("quran",1,{type:"tf",question:"حكم النون الساكنة والتنوين مع حرفي القاف والكاف إخفاء حقيقي",answer:"true"});
addQuestion("quran",1,{type:"tf",question:"سبب إدغام التماثل مجيء ميم ساكنة بعد الميم المتحركة",answer:"false"});
addQuestion("quran",1,{type:"tf",question:"الاستئذان وحده ليس مبرراً لدخول بيوت الغير فقد يؤذن له أو لا يؤذن",answer:"true"});
addQuestion("quran",1,{type:"tf",question:"قال تعالى إلا ما ظهر منها يدخل في ما ظهر منها ما ظهر بقصد الإظهار",answer:"false"});
addQuestion("quran",1,{type:"tf",question:"من أضرار البغاء امتهان كرامة المرأة",answer:"true"});
addQuestion("quran",1,{type:"tf",question:"ضرب الأمثال من الأساليب التربوية القرآنية",answer:"true"});
addQuestion("quran",1,{type:"tf",question:"بعث محمد ﷺ في مجتمع يعيش ذروة الفصاحة",answer:"true"});
addQuestion("quran",1,{type:"tf",question:"أقسام القلقلة صغرى ووسطى وكبرى",answer:"true"});
addQuestion("quran",1,{type:"tf",question:"من يوقن بأن الله منشئ السحاب فإنه يعلم أن الله متفرد بصفات الكمال",answer:"true"});
addQuestion("quran",1,{type:"tf",question:"معنى قوله تعالى يأتوا إليه مذعنين أي يأتوا إليه مؤمنين",answer:"false"});
addQuestion("quran",1,{type:"tf",question:"يتحقق وعد الله تعالى بالتمكين لدينه دون عمل أو جهد يبذل من المؤمنين",answer:"false"});
addQuestion("quran",1,{type:"tf",question:"طاعة ولي أمر الأمة المستقيم على شرع الله مستحبة",answer:"false"});
addQuestion("quran",1,{type:"tf",question:"تم تدوين التفسير على ثلاث مراحل",answer:"false"});
addQuestion("quran",1,{type:"tf",question:"قال تعالى رب ارحمهما حكم الراء الثانية ترقيق",answer:"false"});


addQuestion("quran",1,{type:"mcq",question:"قال تعالى (والذي تولى كبره منهم له عذاب ...)",options:["مهين","عظيم","أليم","شديد"],answer:"عظيم"});

addQuestion("quran",1,{type:"mcq",question:"آخر الآية الدالة على جلد الزاني قوله تعالى:",options:["لعلكم تذكرون","إن كنتم تؤمنون بالله","طائفة من المؤمنين","ولعلكم تفلحون"],answer:"طائفة من المؤمنين"});

addQuestion("quran",1,{type:"mcq",question:"قال تعالى في الذين آمنوا لهم عذاب أليم ...",options:["في الدنيا فقط","في الآخرة فقط","في الدنيا والآخرة","في يوم العرض"],answer:"في الدنيا والآخرة"});

addQuestion("quran",1,{type:"mcq",question:"ورد لفظ المهاجرين في قوله تعالى:",options:["ولا يأتل أولو الفضل منكم","إن الذين جاءوا بالإفك","والذين يرمون المحصنات","لولا إذ سمعتموه"],answer:"ولا يأتل أولو الفضل منكم"});

addQuestion("quran",1,{type:"mcq",question:"يقصد بلفظ طائفة في قوله طائفة من المؤمنين:",options:["شخص واحد","جماعة","رجلان","المهاجرون"],answer:"جماعة"});

addQuestion("quran",1,{type:"mcq",question:"العقوبة الحسية لمن يتهم غيره بالزنى دون بينة:",options:["مائة جلدة","ثمانون جلدة","الرجم","النفي"],answer:"ثمانون جلدة"});

addQuestion("quran",1,{type:"mcq",question:"معنى هيناً في قوله تعالى وتحسبونه هيناً:",options:["صعباً","عظيماً","يسيراً","مستحيلاً"],answer:"يسيراً"});

addQuestion("quran",1,{type:"mcq",question:"يقصد بقوله تعالى خطوات الشيطان:",options:["أقدامه","وساوسه","طريقه الحسي","أصدقاء السوء"],answer:"وساوسه"});

addQuestion("quran",1,{type:"mcq",question:"نوع الإعجاز في الآية سنريهم آياتنا في الآفاق:",options:["لغوي","بياني","علمي","تشريعي"],answer:"علمي"});

addQuestion("quran",1,{type:"mcq",question:"القدرة على ........ من شروط المفسر:",options:["الخطابة","الفهم","الشعر","الرسم"],answer:"الفهم"});

addQuestion("quran",1,{type:"mcq",question:"في قوله تعالى من عهد الحكم التجويدي:",options:["إخفاء","إظهار","إدغام","إقلاب"],answer:"إظهار"});

addQuestion("quran",1,{type:"mcq",question:"قال تعالى والله يعلم .... وما تكتمون",options:["ما في قلوبكم","ما تبدون","أسراركم","ما تخفون"],answer:"ما تبدون"});

addQuestion("quran",1,{type:"mcq",question:"ختمت آية غض البصر بقوله تعالى:",options:["لعلكم تذكرون","والله عليم حكيم","أيها المؤمنون لعلكم تفلحون","إن الله بما يعملون خبير"],answer:"أيها المؤمنون لعلكم تفلحون"});

addQuestion("quran",1,{type:"mcq",question:"قال تعالى ولقد أنزلنا .... آيات مبينات ومثلاً",options:["عليهم","إليكم","لهم","لنا"],answer:"إليكم"});

addQuestion("quran",1,{type:"mcq",question:"الآية الدالة على مفاجأة الكافرين يوم القيامة بعدم نفع أعمالهم:",options:["والذين كفروا أعمالهم كسراب","أو كظلمات في بحر لجي","الله نور السماوات والأرض","في بيوت أذن الله أن ترفع"],answer:"والذين كفروا أعمالهم كسراب"});

addQuestion("quran",1,{type:"mcq",question:"يقتصر عدد الاستئذان على .... مرات",options:["مرتين","ثلاث","أربع","خمس"],answer:"ثلاث"});

addQuestion("quran",1,{type:"mcq",question:"يتميز غض البصر عن حفظ الفرج بأن بعض الرؤية:",options:["محرمة","مباحة","مكروهة","واجبة"],answer:"مباحة"});

addQuestion("quran",1,{type:"mcq",question:"أمر الله من لم يتمكن من الزواج اجتناب:",options:["العمل","المثيرات","الناس","النوم"],answer:"المثيرات"});

addQuestion("quran",1,{type:"mcq",question:"في قوله أو كظلمات في بحر لجي الظلمات هي:",options:["السحاب","المطر","الكفر","الجهل"],answer:"الكفر"});

addQuestion("quran",1,{type:"mcq",question:"تفاوت الناس في القدرة على الفهم نتيجة اختلافهم:",options:["الجسمي","الثقافي","المادي","العرقي"],answer:"الثقافي"});

addQuestion("quran",1,{type:"mcq",question:"الحكم التجويدي في قوله تعالى لمسكم فيما:",options:["إظهار شفوي","إخفاء شفوي","إدغام تماثل","مد متصل"],answer:"إخفاء شفوي"});

addQuestion("quran",1,{type:"mcq",question:"الآية التي تسبق قوله لا تحسبن الذين كفروا معجزين بدأت بـ:",options:["وأقيموا الصلاة","ليستأذنكم الذين","وعد الله الذين آمنوا","يا أيها الذين آمنوا"],answer:"وأقيموا الصلاة"});

addQuestion("quran",1,{type:"mcq",question:"الآية التي تسبق قوله غفور رحيم بعد إكراههن بدأت بـ:",options:["وليستعفف الذين","الزاني لا ينكح","وأنكحوا الأيامى","ولا تقربوا الزنى"],answer:"وليستعفف الذين"});

addQuestion("quran",1,{type:"mcq",question:"الآية التي تسبق قوله إن في ذلك لعبرة لأولي الأبصار بدأت بـ:",options:["ألم تر أن الله يزجي","الله نور السماوات","يكاد سنا برقه","فإذا أنزلت"],answer:"ألم تر أن الله يزجي"});

addQuestion("quran",1,{type:"mcq",question:"قال تعالى أفي قلوبهم مرض أم ارتابوا ....",options:["أم تولوا","أم يخافون","أم كفروا","أم صموا"],answer:"أم يخافون"});

addQuestion("quran",1,{type:"mcq",question:"رحلة تكون السحب وما ينتج عنها من ..... تدلنا على إحكام الكون:",options:["رياح","أمطار","رعد","برق"],answer:"أمطار"});

addQuestion("quran",1,{type:"mcq",question:"وصف الله المنافقين بعد بيان أسباب إعراضهم بأنهم:",options:["كافرون","ظالمون","معتدون","فاسقون"],answer:"ظالمون"});

addQuestion("quran",1,{type:"mcq",question:"إن ثبات الموقف والتزام التوجيهات من أخلاق:",options:["المنافقين","المؤمنين","المترددين","الكافرين"],answer:"المؤمنين"});

addQuestion("quran",1,{type:"mcq",question:"الدراسة العلمية المتكاملة لموضوع هي من منهج التفسير:",options:["التحليلي","الموضوعي","الإجمالي","الأثري"],answer:"الموضوعي"});

addQuestion("quran",1,{type:"mcq",question:"نوع المد في قوله تعالى إنه كان باعتبار هاء الضمير:",options:["صلة كبرى","صلة صغرى","مد طبيعي","مد لازم"],answer:"صلة صغرى"});

addQuestion("quran",2,{type:"tf",question:"يخرج الزاني عن الإيمان حال ارتكابه جريمة الزنى",answer:"true"});
addQuestion("quran",2,{type:"tf",question:"من آثار الزنى في حياة الفرد تهدم الأسرة واضطرابها",answer:"false"});
addQuestion("quran",2,{type:"tf",question:"تكون عقوبة القاذف واحدة في حال صدقه أو كذبه عند عجزه عن البينة",answer:"true"});
addQuestion("quran",2,{type:"tf",question:"يمكن للقاذف العودة لوضعه في المجتمع إذا تاب وبرأ الشخص الذي قذفه",answer:"true"});
addQuestion("quran",2,{type:"tf",question:"أحكام القذف تساعد على الحد من إطلاق الألسنة بالتهم الكاذبة",answer:"true"});
addQuestion("quran",2,{type:"tf",question:"تحدث الإشاعات الكاذبة خللاً تربوياً للشخصية المسلمة",answer:"true"});
addQuestion("quran",2,{type:"tf",question:"ورد التراجع عن اليمين المعقودة في قوله تعالى إن الذين يرمون المحصنات الغافلات",answer:"false"});
addQuestion("quran",2,{type:"tf",question:"النظرة الطبيعية هي المليئة بالاشتهاء والتلذذ",answer:"false"});
addQuestion("quran",2,{type:"tf",question:"البغاء مصطلح يطلق على استمتاع الرجل بالمرأة مقابل منفعة",answer:"true"});
addQuestion("quran",2,{type:"tf",question:"ابتعاد المسلم عن المثيرات الجنسية من وسائل الاستعفاف",answer:"true"});
addQuestion("quran",2,{type:"tf",question:"كل ما في الكون يسبح لله بلسان المقال فقط",answer:"false"});
addQuestion("quran",2,{type:"tf",question:"خلق الله من الماء كل شيء حي",answer:"true"});
addQuestion("quran",2,{type:"tf",question:"معنى قوله تعالى مذعنين أي مسرعين طائعين",answer:"true"});
addQuestion("quran",2,{type:"tf",question:"الإيمان والعمل الصالح شرطان لاستحقاق وعد الله بالتمكين",answer:"true"});
addQuestion("quran",2,{type:"tf",question:"منهج التفسير الإجمالي يتناول الآيات حسب ترتيب المصحف",answer:"true"});
addQuestion("quran",2,{type:"tf",question:"يعد كتاب صفوة التفاسير من كتب التفسير بالمأثور",answer:"false"});
addQuestion("quran",2,{type:"tf",question:"يتحقق الإظهار الشفوي عند وقوع أحد حروف الإظهار بعد الميم الساكنة",answer:"true"});
addQuestion("quran",2,{type:"tf",question:"النون والميم المشددتان حكمهما وجوب الغنة بمقدار حركتين",answer:"true"});
addQuestion("quran",2,{type:"tf",question:"في قوله تعالى ارجعوا حكم الراء الترقيق",answer:"false"});
addQuestion("quran",2,{type:"tf",question:"المد الطبيعي هو الذي لا تقوم ذات الحرف إلا به",answer:"true"});


addQuestion("quran",2,{type:"mcq",question:"عقوبة الزاني البكر كما وردت في سورة النور:",options:["الرجم","النفي","مائة جلدة","خمسون جلدة"],answer:"مائة جلدة"});

addQuestion("quran",2,{type:"mcq",question:"يستحق رامي المحصنات بالزنى ثلاث عقوبات حسية ومعنوية و:",options:["مالية","دينية","اجتماعية","سياسية"],answer:"دينية"});

addQuestion("quran",2,{type:"mcq",question:"إشاعة الفاحشة في المجتمع تؤدي إلى:",options:["التماسك","التحلل الأخلاقي","القوة الاقتصادية","الرقي الثقافي"],answer:"التحلل الأخلاقي"});

addQuestion("quran",2,{type:"mcq",question:"عقوبة الزانية والزاني في سورة النور بدأت بـ:",options:["الزاني","الزانية","الذين يرمون","المحصنات"],answer:"الزانية"});

addQuestion("quran",2,{type:"mcq",question:"الآية التي تدل على فضل الله ورحمته في حادثة الإفك ختمت بـ:",options:["غفور رحيم","تواب حكيم","عزيز حكيم","بكل شيء عليم"],answer:"تواب حكيم"});

addQuestion("quran",2,{type:"mcq",question:"يقصد ببيوت غير بيوتكم:",options:["مساجد","محلات تجارية","مساكن الغير","أماكن عامة"],answer:"مساكن الغير"});

addQuestion("quran",2,{type:"mcq",question:"من آداب الاستئذان أن لا يقف المستأذن:",options:["بعيداً عن الباب","تجاه الباب","خلف الباب","بجانب الباب"],answer:"تجاه الباب"});

addQuestion("quran",2,{type:"mcq",question:"جعل الله حفظ الفرج نتيجة لـ:",options:["الصدقة","غض البصر","الصيام","الحج"],answer:"غض البصر"});

addQuestion("quran",2,{type:"mcq",question:"قال تعالى نور على نور النور الثاني هو:",options:["الشمس","القمر","الوحي القرآن","النجوم"],answer:"الوحي القرآن"});

addQuestion("quran",2,{type:"mcq",question:"تشبيه أعمال الكفار بالسراب يوضح ضلالهم في الجانب:",options:["السياسي","العقدي","الاقتصادي","الاجتماعي"],answer:"العقدي"});

addQuestion("quran",2,{type:"mcq",question:"إخراج الميت من الحي كما ورد في الآيات يمثله خروج:",options:["النبات من البذر","الكافر من المؤمن","الطير من البيضة","الولد من الأب"],answer:"الكافر من المؤمن"});

addQuestion("quran",2,{type:"mcq",question:"التمكين في الأرض للمؤمنين يعني:",options:["الثراء","الاستخلاف والسيادة","كثرة العدد","طول العمر"],answer:"الاستخلاف والسيادة"});

addQuestion("quran",2,{type:"mcq",question:"معنى قوله تعالى أشتاتاً:",options:["مجتمعين","متفرقين","أقوياء","ضعفاء"],answer:"متفرقين"});

addQuestion("quran",2,{type:"mcq",question:"يعد تفسير القرآن العظيم لابن كثير من التفسير:",options:["الرأي","المأثور","الإشارة","اللغة"],answer:"المأثور"});

addQuestion("quran",2,{type:"mcq",question:"من شروط المفسر البعد عن الهوى و:",options:["المذهبية","السياسة","التجارة","السفر"],answer:"المذهبية"});

addQuestion("quran",2,{type:"mcq",question:"الحكم التجويدي في قوله تعالى أن ترفع:",options:["إظهار","إخفاء","إدغام","إقلاب"],answer:"إخفاء"});

addQuestion("quran",2,{type:"mcq",question:"يكون حكم الميم الساكنة أشد إظهاراً عند:",options:["الواو والفاء","القاف والكاف","الميم والباء","السين والصاد"],answer:"الواو والفاء"});

addQuestion("quran",2,{type:"mcq",question:"مقدار المد المتصل:",options:["حركتان","ثلاث حركات","أربع أو خمس حركات","ست حركات"],answer:"أربع أو خمس حركات"});

addQuestion("quran",2,{type:"mcq",question:"في قوله تعالى من جبال فيها من برد تكرار من يفيد:",options:["التوكيد","التبعيض","التشبيه","التعليل"],answer:"التبعيض"});

addQuestion("quran",2,{type:"mcq",question:"قال تعالى ألم تر أن الله يزجي سحاباً تدل على إعجاز:",options:["لغوي","علمي","تشريعي","بياني"],answer:"علمي"});

addQuestion("quran",2,{type:"mcq",question:"القدرة على الفهم تعد للمفسر:",options:["أدباً","شرطاً","أسلوباً","موهبة"],answer:"شرطاً"});

addQuestion("quran",2,{type:"mcq",question:"المد الفرعي هو المد الزائد على الطبيعي بسبب:",options:["الهمز أو السكون","الضم والهمز","الفتح والسكون","الهمز والصلة"],answer:"الهمز أو السكون"});

addQuestion("quran",2,{type:"mcq",question:"نوع المد في قوله إنه كان باعتبار هاء الضمير:",options:["صلة كبرى","صلة صغرى","تمكين","لين"],answer:"صلة صغرى"});

addQuestion("quran",2,{type:"mcq",question:"سبب تسمية المد اللازم:",options:["لزوم مده حركتين","لزوم مده ست حركات وصلاً ووقفاً","لزوم السكون قبله","جواز قصره ومده"],answer:"لزوم مده ست حركات وصلاً ووقفاً"});

addQuestion("quran",2,{type:"mcq",question:"الحكم التجويدي في أنزلنا:",options:["إظهار حلقي","إخفاء حقيقي","إدغام بغنة","إدغام بغير غنة"],answer:"إخفاء حقيقي"});
/* ========= الرياضيات ========= */

addQuestion("math",0,{type:"tf",question:"نها س→∞ (هـ^-س جتا س) = صفر",answer:"true"});
addQuestion("math",0,{type:"tf",question:"يمكن إعادة تعريف الدالة د(س)=قا س / ظا س لتكون متصلة عند س=π/2",answer:"true"});
addQuestion("math",0,{type:"tf",question:"إذا كانت د(س)=(س² - س + 1)^5 فإن د'(0)=0",answer:"false"});
addQuestion("math",0,{type:"tf",question:"إذا كانت س² - 3س - ص س = 2 فإن دص/دس عند (2،-2) = 3",answer:"true"});
addQuestion("math",0,{type:"tf",question:"إذا كانت د(س)=1-س² و ق(س)=2س-3 فإن (ق∘د)'(1) = -6",answer:"false"});
addQuestion("math",0,{type:"tf",question:"معادلة مماس الدالة ص=د(س) عند (أ،د(أ)) هي ص + أ = د'(أ)(س - د(أ))",answer:"false"});
addQuestion("math",0,{type:"tf",question:"إذا كانت ص = ظا² س فإن ص'' = 2 ص قا² س",answer:"false"});
addQuestion("math",0,{type:"tf",question:"إذا كانت د(س)=س(ظا س / قا س) فإن د'(π/3)=لو(3/2)",answer:"false"});
addQuestion("math",0,{type:"tf",question:"إذا كانت د(س)=2جتا س/(1-جتا س) فإن د'(0)=1",answer:"false"});
addQuestion("math",0,{type:"tf",question:"كل دالة تحقق شروط مبرهنة رول لها مماس أفقي واحد على الأقل",answer:"true"});
addQuestion("math",0,{type:"tf",question:"للدالة د(س)=لو(س³+3س+1) نقطة حرجة عند س=0",answer:"true"});
addQuestion("math",0,{type:"tf",question:"إذا كان ص=1 مقارب أفقي للدالة (3س-2)/(أ س+6) فإن المقارب الرأسي س=-2",answer:"true"});
addQuestion("math",0,{type:"tf",question:"∫ س³ دس = لو|س| + ث",answer:"false"});
addQuestion("math",0,{type:"tf",question:"عند حساب ∫ من 0 إلى 4 (س - س²) دس بالتعريف فإن س*ر = 4ر/ن",answer:"true"});
addQuestion("math",0,{type:"tf",question:"∫ (1/(جا² س ظا س)) دس = 2 قتا² س + ث",answer:"false"});
addQuestion("math",0,{type:"tf",question:"∫ (هـ^2س - 1)/هـ^س دس = هـ^س - هـ^-س + ث",answer:"false"});
addQuestion("math",0,{type:"tf",question:"∫ (1/س) جتا(لو س) دس = -جا(لو س) + ث",answer:"false"});
addQuestion("math",0,{type:"tf",question:"إذا كانت د(ج)=5 للدالة د(س)=2س-1 على [0،ب] فإن ب=4",answer:"false"});
addQuestion("math",0,{type:"tf",question:"∫ من 1 إلى 18 س(3س²-4)² دس = 63",answer:"false"});
addQuestion("math",0,{type:"tf",question:"∫ من 2 إلى 4 (24س-32) دس ≥ ∫ من 2 إلى 4 (4س²) دس",answer:"true"});



addQuestion("math",0,{type:"mcq",question:"إذا كانت نها س→0 (جـ س² قتا²2س)=4 فإن جـ =",options:["2","4","8","16"],answer:"16"});

addQuestion("math",0,{type:"mcq",question:"إذا كانت د(س)=(جا2س+جا6س)/ظا4س متصلة عند س=0 فإن د(0)=",options:["1","2","3","4"],answer:"2"});

addQuestion("math",0,{type:"mcq",question:"إذا كان دص/دس=3 و دع/دس=-6 فإن دص/دع=",options:["1","-1/2","-2","4"],answer:"-1/2"});

addQuestion("math",0,{type:"mcq",question:"أي الدوال التالية معرفة صراحة:",options:["س ظا ص - س = ص²","هـ^(ص-س)=ص²","لو س + لو ص = س³","ص = جتا(س²+3)"],answer:"ص = جتا(س²+3)"});

addQuestion("math",0,{type:"mcq",question:"إذا كانت د(س)=2+3س-8س² تحقق شروط رول فإن جـ =",options:["0","4","8","9"],answer:"9"});

addQuestion("math",0,{type:"mcq",question:"إذا كانت د(س)=هـ^(لو س - س) فإن د'(1)=هـ^-1 وقيمة د =",options:["1","2","3","4"],answer:"4"});

addQuestion("math",0,{type:"mcq",question:"إذا كانت ص=س^26 فإن ص^(26) =",options:["!25 س","!26","!25","!26 س"],answer:"!26"});

addQuestion("math",0,{type:"mcq",question:"ميل الناظم للمنحنى س ص + قا ص = π² + π عند (2،π) =",options:["-1","1/π","-1/π","π/4"],answer:"1/π"});

addQuestion("math",0,{type:"mcq",question:"قيمة جـ من مبرهنة القيمة المتوسطة للدالة 8س²-4س على [0،3] =",options:["-3/2","-1","1","1.5"],answer:"1.5"});

addQuestion("math",0,{type:"mcq",question:"إذا كان للدالة أ س³ - س² - 2س قيمة قصوى عند س=-1 فإن أ =",options:["0","1/3","2/3","4"],answer:"1/3"});

addQuestion("math",0,{type:"mcq",question:"نقطة الانعطاف للدالة 2س³-6س²-3 هي:",options:["(1،3)","(1،-7)","(1،-5)","(-1،11)"],answer:"(1،-5)"});

addQuestion("math",0,{type:"mcq",question:"الدالة تكون تناقصية في الفترة:",options:["[-1،4]","[-∞،-1]","[2،+∞]","[4،+∞]"],answer:"[4،+∞]"});

addQuestion("math",0,{type:"mcq",question:"إذا كان ∫ من 4 إلى ك (3 لو س) دس =18 فإن ك =",options:["1","2","3","4"],answer:"4"});

addQuestion("math",0,{type:"mcq",question:"إذا كان ∫ من 2 إلى4 د(س) دس=-4 و ∫ من2 إلى3 د(س) دس=1 فإن ∫ من3 إلى4 د(س) دس =",options:["-4","-3","1","7"],answer:"7"});

addQuestion("math",0,{type:"mcq",question:"الحد الأدنى للتكامل ∫ من1 إلى5 √(3س²-2) دس =",options:["4","2","3","1"],answer:"4"});

/* تكملة الأسئلة حتى 30 */

addQuestion("math",0,{type:"mcq",question:"مشتقة س² هي:",options:["2س","س","س²","1"],answer:"2س"});
addQuestion("math",0,{type:"mcq",question:"مشتقة جا س:",options:["جتا س","-جا س","قا س","ظا س"],answer:"جتا س"});
addQuestion("math",0,{type:"mcq",question:"مشتقة جتا س:",options:["جا س","-جا س","جتا س","ظا س"],answer:"-جا س"});
addQuestion("math",0,{type:"mcq",question:"مشتقة هـ^س:",options:["هـ^س","س هـ","لو س","1"],answer:"هـ^س"});
addQuestion("math",0,{type:"mcq",question:"مشتقة لو س:",options:["1/س","س","لو س","هـ^س"],answer:"1/س"});
addQuestion("math",0,{type:"mcq",question:"∫ س دس =",options:["س²/2","2س","س³","لو س"],answer:"س²/2"});
addQuestion("math",0,{type:"mcq",question:"∫ جتا س دس =",options:["جا س","-جا س","جتا س","ظا س"],answer:"جا س"});
addQuestion("math",0,{type:"mcq",question:"∫ جا س دس =",options:["-جتا س","جتا س","جا س","ظا س"],answer:"-جتا س"});
addQuestion("math",0,{type:"mcq",question:"∫ هـ^س دس =",options:["هـ^س","س هـ","لو س","1"],answer:"هـ^س"});
addQuestion("math",0,{type:"mcq",question:"∫ 1/س دس =",options:["لو|س|","س","1/س","هـ^س"],answer:"لو|س|"});
addQuestion("math",0,{type:"mcq",question:"ميل المماس هو:",options:["المشتقة","التكامل","النهاية","اللوغاريتم"],answer:"المشتقة"});
addQuestion("math",0,{type:"mcq",question:"المشتقة الثانية تستخدم لإيجاد:",options:["التكامل","نقاط الانعطاف","النهايات","المقارب"],answer:"نقاط الانعطاف"});
addQuestion("math",0,{type:"mcq",question:"إذا كانت الدالة متزايدة فإن:",options:["المشتقة موجبة","المشتقة سالبة","المشتقة صفر","غير معرفة"],answer:"المشتقة موجبة"});
addQuestion("math",0,{type:"mcq",question:"إذا كانت الدالة تناقصية فإن:",options:["المشتقة موجبة","المشتقة سالبة","المشتقة صفر","غير معرفة"],answer:"المشتقة سالبة"});
addQuestion("math",0,{type:"mcq",question:"التكامل هو العملية العكسية لـ:",options:["المشتقة","الضرب","القسمة","اللوغاريتم"],answer:"المشتقة"});


addQuestion("math",1,{type:"tf",question:"قيمة جـ التي تحقق مبرهنة رول للدالة د(س)=س²-4س+1 على [0،4] هي 2",answer:"true"});
addQuestion("math",1,{type:"tf",question:"الدالة د(س)=جا س / س متصلة عند س=0",answer:"false"});
addQuestion("math",1,{type:"tf",question:"إذا كانت ص=لو(س²+5) فإن ص' = 2س/(س²+5)",answer:"true"});
addQuestion("math",1,{type:"tf",question:"المقارب الرأسي للدالة (س+2)/(س-3) هو س=3",answer:"true"});
addQuestion("math",1,{type:"tf",question:"∫ هـ^2س دس = هـ^2س + ث",answer:"false"});
addQuestion("math",1,{type:"tf",question:"النقطة (1،4) نقطة حرجة للدالة س³-3س+6",answer:"true"});
addQuestion("math",1,{type:"tf",question:"إذا كانت ص=جتا س فإن ص^(4)=جتا س",answer:"true"});
addQuestion("math",1,{type:"tf",question:"∫ قا² س دس = ظا س + ث",answer:"true"});
addQuestion("math",1,{type:"tf",question:"مساحة المنطقة بين ص=س ومحور السينات في [0،2] تساوي 2",answer:"true"});
addQuestion("math",1,{type:"tf",question:"الدالة |س-2| قابلة للاشتقاق عند س=2",answer:"false"});
addQuestion("math",1,{type:"tf",question:"سعة العدد المركب ع=-ت هي 270°",answer:"true"});
addQuestion("math",1,{type:"tf",question:"إذا كان ع=1+ت فإن |ع|=2",answer:"false"});
addQuestion("math",1,{type:"tf",question:"رتبة الحد الأوسط في مفكوك (س+أ)^ن عندما ن زوجي هي (ن/2+1)",answer:"true"});
addQuestion("math",1,{type:"tf",question:"ن ق ر = ن ق (ن-ر)",answer:"true"});
addQuestion("math",1,{type:"tf",question:"طول المحور المرافق للقطع الزائد (س²/9)-(ص²/16)=1 هو 6",answer:"false"});
addQuestion("math",1,{type:"tf",question:"الحادثتان أ و ب مستقلتان إذا كان ح(أ∩ب)=ح(أ)×ح(ب)",answer:"true"});
addQuestion("math",1,{type:"tf",question:"بؤرة القطع المكافئ ص²=-12س هي (-3،0)",answer:"true"});
addQuestion("math",1,{type:"tf",question:"مجموع معاملات مفكوك (س+ص)^5 يساوي 32",answer:"true"});
addQuestion("math",1,{type:"tf",question:"إذا كان ع=ت^4 فإن ع=1",answer:"true"});
addQuestion("math",1,{type:"tf",question:"نها س→0 ((1-جتا س)/س)=0",answer:"true"});


addQuestion("math",1,{type:"mcq",question:"قيمة نها س→∞ ((5س³-2س)/(2س³+1)):",options:["0","2/5","2.5","∞"],answer:"2.5"});

addQuestion("math",1,{type:"mcq",question:"إذا كانت ص=جا(س²) فإن المشتقة:",options:["جتا(س²)","2س جتا(س²)","2س جا(س²)","-2س جتا(س²)"],answer:"2س جتا(س²)"});

addQuestion("math",1,{type:"mcq",question:"∫ 1/(س+1) دس =",options:["س+1","لو|س+1|+ث","(س+1)²","1"],answer:"لو|س+1|+ث"});

addQuestion("math",1,{type:"mcq",question:"إذا كان ع=1-ت فإن صورته القطبية:",options:["[√2،45°]","[√2،315°]","[2،45°]","[√2،135°]"],answer:"[√2،315°]"});

addQuestion("math",1,{type:"mcq",question:"عدد طرق ترتيب 4 أشخاص:",options:["4","8","12","24"],answer:"24"});

addQuestion("math",1,{type:"mcq",question:"بؤرة القطع المكافئ س²=20ص:",options:["(5،0)","(0،5)","(0،-5)","(20،0)"],answer:"(0،5)"});

addQuestion("math",1,{type:"mcq",question:"إذا ح(أ)=0.6 و ح(ب)=0.5 و ح(أ∪ب)=0.8 فإن ح(أ∩ب)=",options:["0.1","0.2","0.3","1.1"],answer:"0.3"});

addQuestion("math",1,{type:"mcq",question:"مشتقة هـ^س:",options:["س هـ^(س-1)","هـ^س","هـ^س لو س","1/هـ^س"],answer:"هـ^س"});

addQuestion("math",1,{type:"mcq",question:"القيمة العظمى للدالة 4-س²:",options:["0","2","4","-4"],answer:"4"});

addQuestion("math",1,{type:"mcq",question:"∫ من0 إلى2 (3س²) دس =",options:["4","6","8","12"],answer:"8"});

addQuestion("math",1,{type:"mcq",question:"إذا ن ل 2 =20 فإن ن =",options:["4","5","10","20"],answer:"5"});

addQuestion("math",1,{type:"mcq",question:"دليل القطع المكافئ ص²=4س:",options:["س=1","س=-1","ص=1","ص=-1"],answer:"س=-1"});

addQuestion("math",1,{type:"mcq",question:"قيمة ت^22 =",options:["1","-1","ت","-ت"],answer:"-1"});

addQuestion("math",1,{type:"mcq",question:"الاختلاف المركزي للقطع الزائد:",options:["<1","=1",">1","=0"],answer:">1"});

addQuestion("math",1,{type:"mcq",question:"∫ (جا س + جتا س)² دس =",options:["س+ث","س-1/2 جتا2س+ث","س+جا2س+ث","جا²س"],answer:"س-1/2 جتا2س+ث"});

addQuestion("math",1,{type:"mcq",question:"إذا ص=لو(لو س) فإن المشتقة:",options:["1/س","1/(س لو س)","1/لو س","س لو س"],answer:"1/(س لو س)"});

addQuestion("math",1,{type:"mcq",question:"النقطة (0،3) للمنحنى س²+3:",options:["عظمى","صغرى","انعطاف","حرجة"],answer:"صغرى"});

addQuestion("math",1,{type:"mcq",question:"مرافق العدد 2ت-3:",options:["2ت+3","-2ت+3","-2ت-3","3-2ت"],answer:"-2ت-3"});

addQuestion("math",1,{type:"mcq",question:"∫ (جا س/جتا س) دس =",options:["لو|جا س|","-لو|جتا س|","ظا س","قا² س"],answer:"-لو|جتا س|"});

addQuestion("math",1,{type:"mcq",question:"الحد الرابع في مفكوك (س+أ)^6:",options:["6ق4 س² أ⁴","6ق3 س³ أ³","6ق3 س⁴ أ²","20س³"],answer:"6ق3 س³ أ³"});

addQuestion("math",1,{type:"mcq",question:"ميل المماس للمنحنى س³ عند س=1:",options:["1","2","3","0"],answer:"3"});

addQuestion("math",1,{type:"mcq",question:"إذا د(س)=س-2 و ر(س)=س² فإن (ر∘د)(س)=",options:["س²-2","(س-2)²","س²-4","2س-4"],answer:"(س-2)²"});

addQuestion("math",1,{type:"mcq",question:"نها س→∞ (1+1/س)^س =",options:["1","0","هـ","∞"],answer:"هـ"});

addQuestion("math",1,{type:"mcq",question:"طول المحور الأكبر للقطع الناقص:",options:["5","10","18","50"],answer:"10"});

addQuestion("math",1,{type:"mcq",question:"إذا ع = جتا45 + ت جا45 فإن ع² =",options:["1","ت","-ت","-1"],answer:"ت"});

addQuestion("math",1,{type:"mcq",question:"عدد طرق اختيار طالبين من 5:",options:["5","10","20","120"],answer:"10"});

addQuestion("math",1,{type:"mcq",question:"∫ لو س دس =",options:["1/س","س لو س - س + ث","س لو س","س²"],answer:"س لو س - س + ث"});

addQuestion("math",1,{type:"mcq",question:"المقارب الأفقي للدالة 3/(س-1):",options:["ص=3","ص=1","ص=0","لا يوجد"],answer:"ص=0"});

addQuestion("math",1,{type:"mcq",question:"إذا كانت الدالة تحقق رول على [1،5] فإن د(1)-د(5) =",options:["4","-4","0","6"],answer:"0"});

addQuestion("math",1,{type:"mcq",question:"المشتقة الثانية لـ ظا س:",options:["قا² س","2 قا² س ظا س","2 قا س","قا⁴ س"],answer:"2 قا² س ظا س"});

addQuestion("math",2,{type:"tf",question:"إذا كان |ع| = 3 فإن ع × ع = 6",answer:"false"});
addQuestion("math",2,{type:"tf",question:"سعة العدد المركب تساوي سعة مرافقه",answer:"false"});
addQuestion("math",2,{type:"tf",question:"حاصل ضرب جذري المعادلة ع² - 4ع - 8ت = 0 يساوي 8ت",answer:"false"});
addQuestion("math",2,{type:"tf",question:"قيمة ت × ت² × ت³ × ... × ت⁷ تساوي 1",answer:"true"});
addQuestion("math",2,{type:"tf",question:"إذا كان ع = جتا(π/12) + ت جا(π/12) فإن ع = ع⁻¹",answer:"false"});
addQuestion("math",2,{type:"tf",question:"إذا كان ع = (√2 ت)³ فإن ع = [8 , -90°]",answer:"true"});
addQuestion("math",2,{type:"tf",question:"إذا كان (1 - 3ت) جذراً تربيعياً لعدد ع فإن ع = -8 - 6ت",answer:"true"});
addQuestion("math",2,{type:"tf",question:"إذا كان ن ل ر = ن ل ن-ر فإن قيمة ن دائماً تساوي 9",answer:"false"});
addQuestion("math",2,{type:"tf",question:"عدد طرق جلوس 5 طلاب بحيث طالب محدد في الوسط يساوي 4!",answer:"true"});
addQuestion("math",2,{type:"tf",question:"الحد الأوسط في مفكوك (س + 1/س)¹⁰ هو ح₆",answer:"true"});
addQuestion("math",2,{type:"tf",question:"في مفكوك (أ + ب)ⁿ إذا كان ن زوجياً فإن للمفكوك حدين أوسطين",answer:"false"});
addQuestion("math",2,{type:"tf",question:"مجموعة حل المعادلة ن ق (ن-2) = 10 هي {5}",answer:"true"});
addQuestion("math",2,{type:"tf",question:"طول المحور القاطع للقطع الزائد (س²/9)-(ص²/16)=1 هو 6",answer:"true"});
addQuestion("math",2,{type:"tf",question:"الاختلاف المركزي للقطع الناقص دائماً أكبر من الواحد",answer:"false"});
addQuestion("math",2,{type:"tf",question:"المستقيم ص = -أ هو دليل القطع المكافئ س² = 4أ ص",answer:"true"});
addQuestion("math",2,{type:"tf",question:"العدد ع = جتا هـ - ت جا هـ بالصورة القطبية هو [1,-هـ]",answer:"true"});
addQuestion("math",2,{type:"tf",question:"إذا كان ن ق 3 = ن ق 5 فإن ن = 8",answer:"true"});
addQuestion("math",2,{type:"tf",question:"القطع المكافئ ص² = -12س فتحته نحو اليمين",answer:"false"});
addQuestion("math",2,{type:"tf",question:"الجذور التربيعية للعدد -16 هي ±4ت",answer:"true"});
addQuestion("math",2,{type:"tf",question:"معامل س⁶ في مفكوك (1 + س)⁶ هو 1",answer:"true"});


addQuestion("math",2,{type:"mcq",question:"إذا كان ع = -ت فإن الصورة القطبية للعدد ع هي:",options:["[1,90°]","[1,-90°]","[1,180°]","[1,0°]"],answer:"[1,-90°]"});

addQuestion("math",2,{type:"mcq",question:"قيمة (1 + ت)⁸:",options:["8","16","32","64"],answer:"16"});

addQuestion("math",2,{type:"mcq",question:"مجموع الجذور التكعيبية للواحد:",options:["1","0","-1","ت"],answer:"0"});

addQuestion("math",2,{type:"mcq",question:"إذا كان ع = 1 + √3ت فإن سعته:",options:["30°","45°","60°","90°"],answer:"60°"});

addQuestion("math",2,{type:"mcq",question:"عدد طرق اختيار لجنة من 3 من بين 10:",options:["10 ل 3","10 ق 3","3!","10!"],answer:"10 ق 3"});

addQuestion("math",2,{type:"mcq",question:"معامل الحد الأوسط في مفكوك (1 + س)⁴:",options:["4","6","1","2"],answer:"6"});

addQuestion("math",2,{type:"mcq",question:"بؤرة القطع المكافئ ص² = 12س:",options:["(0,3)","(3,0)","(-3,0)","(0,-3)"],answer:"(3,0)"});

addQuestion("math",2,{type:"mcq",question:"طول المحور الأصغر للقطع الناقص:",options:["10","6","3","5"],answer:"6"});

addQuestion("math",2,{type:"mcq",question:"القطع الذي هـ = √2 هو:",options:["مكافئ","ناقص","زائد","دائرة"],answer:"زائد"});

addQuestion("math",2,{type:"mcq",question:"المقدار ن ق ر + ن ق ر-1 يساوي:",options:["ن+1 ق ر-1","ن+1 ق ر","ن ق ر+1","ن+2 ق ر"],answer:"ن+1 ق ر"});

addQuestion("math",2,{type:"mcq",question:"إذا كان ع = 2[جتا30 + ت جا30] فإن ع²:",options:["[2,60]","[4,60]","[4,30]","[2,90]"],answer:"[4,60]"});

addQuestion("math",2,{type:"mcq",question:"المسافة بين بؤرتي القطع الناقص تسمى:",options:["البعد البؤري","المسافة البؤرية","المحور الأكبر","الاختلاف المركزي"],answer:"المسافة البؤرية"});

addQuestion("math",2,{type:"mcq",question:"عدد التباديل:",options:["ن!/ر!","ن!/(ن-ر)!","ن!","ن ق ر"],answer:"ن!/(ن-ر)!"});

addQuestion("math",2,{type:"mcq",question:"معادلة قطع مكافئ رأسه (0,0) ودليله س=2:",options:["ص²=8س","ص²=-8س","س²=8ص","س²=-8ص"],answer:"ص²=-8س"});

addQuestion("math",2,{type:"mcq",question:"قيمة (1 + ω - ω²)³:",options:["8","-8","0","1"],answer:"-8"});

addQuestion("math",2,{type:"mcq",question:"إذا كان ع = ت²⁰²³ فإن ع:",options:["1","-1","ت","-ت"],answer:"-ت"});

addQuestion("math",2,{type:"mcq",question:"عدد طرق ترتيب 4 أشخاص في دائرة:",options:["4!","3!","4","2!"],answer:"3!"});

addQuestion("math",2,{type:"mcq",question:"القطع الزائد س² - ص² = 1 يسمى:",options:["ناقص","قائم","متكافئ","دائري"],answer:"قائم"});

addQuestion("math",2,{type:"mcq",question:"عدد حدود مفكوك (س + أ)ⁿ:",options:["ن","ن+1","ن-1","2ن"],answer:"ن+1"});

addQuestion("math",2,{type:"mcq",question:"قيمة مجموع معاملات (س - ص)⁷:",options:["7","14","0","1"],answer:"0"});

addQuestion("math",2,{type:"mcq",question:"إذا كان |ع| = √(س² + ص²) فإن ع يمثل:",options:["عدد حقيقي","عدد مركب","عدد تخيلي","عدد كسري"],answer:"عدد مركب"});

addQuestion("math",2,{type:"mcq",question:"الاختلاف المركزي للقطع المكافئ:",options:["<1",">1","=1","=0"],answer:"=1"});

addQuestion("math",2,{type:"mcq",question:"مرافق العدد 3 - 4ت:",options:["-3+4ت","3+4ت","-3-4ت","4-3ت"],answer:"3+4ت"});

addQuestion("math",2,{type:"mcq",question:"رتبة الحد الخامس في مفكوك (1 + س)ⁿ:",options:["5","4","6","0"],answer:"4"});

addQuestion("math",2,{type:"mcq",question:"العدد الذي سعته 180°:",options:["تخيلي موجب","تخيلي سالب","حقيقي موجب","حقيقي سالب"],answer:"حقيقي سالب"});

addQuestion("math",2,{type:"mcq",question:"طول المحور المرافق للقطع الزائد:",options:["8","6","4","3"],answer:"6"});

addQuestion("math",2,{type:"mcq",question:"إذا كان ن ل 2 = 20 فإن ن:",options:["4","5","10","2"],answer:"5"});

addQuestion("math",2,{type:"mcq",question:"أي مما يلي عدد تخيلي بحت:",options:["2+ت","5","3ت","0"],answer:"3ت"});

addQuestion("math",2,{type:"mcq",question:"مركز القطع الناقص:",options:["(0,0)","(-2,3)","(2,-3)","(3,-2)"],answer:"(2,-3)"});

addQuestion("math",2,{type:"mcq",question:"مقدار العدد المركب:",options:["س²+ص²","√(س²+ص²)","س+ص","س-ص"],answer:"√(س²+ص²)"});





/* ========= الإسلامية ========= */

/* ========================= */
/* صح وخطأ - التربية الإسلامية */
/* ========================= */

addQuestion("islamic",0,{type:"tf",question:"العبودية تشمل جميع الموجودات في هذا الكون",answer:"true"});

addQuestion("islamic",0,{type:"tf",question:"أشاع المشركون أن القرآن الكريم وحي",answer:"false"});

addQuestion("islamic",0,{type:"tf",question:"قول الرسول ﷺ الذي يكشف فيه عن حقائق لا يدركها أهل زمانه يسمى إعجازاً",answer:"true"});

addQuestion("islamic",0,{type:"tf",question:"يجتمع الإيمان مع التحاكم إلى غير ما أنزل الله تعالى",answer:"false"});

addQuestion("islamic",0,{type:"tf",question:"العدل والمساواة بين الناس أمام الشرع محدودة بالمكانة الاجتماعية",answer:"false"});

addQuestion("islamic",0,{type:"tf",question:"قال الرسول ﷺ (اسمعوا مني تعيشوا ألا لا تظلموا) في حجة الوداع",answer:"true"});

addQuestion("islamic",0,{type:"tf",question:"المسلم يجب أن تكون حياته كلها جداً ولا يتخللها مزاح",answer:"false"});

addQuestion("islamic",0,{type:"tf",question:"المرابطة في الثغور لحماية المسلمين من صور الجهاد في سبيل الله",answer:"true"});

addQuestion("islamic",0,{type:"tf",question:"الأخوات الشقيقات يرثن فرضاً مع وجود إخوة ذكور",answer:"false"});

addQuestion("islamic",0,{type:"tf",question:"المكره لا يقام عليه الحد",answer:"true"});

addQuestion("islamic",0,{type:"tf",question:"المعارك في الإسلام يقصد بها جمع المال والسلطة",answer:"false"});

addQuestion("islamic",0,{type:"tf",question:"مرارة بن الربيع رضي الله عنه أحرق كتاب ملك غسان رغم مقاطعة المجتمع له",answer:"true"});

addQuestion("islamic",0,{type:"tf",question:"تثاقل المكلف في أداء التكاليف الشرعية يوجب عليه مجاهدة نفسه",answer:"true"});

addQuestion("islamic",0,{type:"tf",question:"شرع اليهود في الكيد للإسلام بإشعال العداوة بين الأنصار",answer:"true"});

addQuestion("islamic",0,{type:"tf",question:"عقوبة المنتحر لا تتغير بتغير وسيلة الانتحار",answer:"true"});

addQuestion("islamic",0,{type:"tf",question:"إيقاظ النبي ﷺ أهله للصلاة فيه درس تربوي لرب الأسرة",answer:"true"});

addQuestion("islamic",0,{type:"tf",question:"يصح التوكل على الله دون الأخذ بالأسباب",answer:"false"});

addQuestion("islamic",0,{type:"tf",question:"الأخ لأم من أصحاب فرض الربع",answer:"false"});

addQuestion("islamic",0,{type:"tf",question:"يجب الاستمرار في العمل حتى مع ضيق الحال",answer:"true"});

addQuestion("islamic",0,{type:"tf",question:"الوصية مستحبة إذا كانت هناك وديعة يخشى ضياعها",answer:"true"});

/* ========================= */
/* اختيار من متعدد - الإسلامية */
/* ========================= */

addQuestion("islamic",0,{type:"mcq",question:"قال رسول الله ﷺ: والمرأة راعية في بيت زوجها ومسؤولة عن رعيتها، المقصود:",options:["المرأة","الزوجة","الأم","البنت"],answer:"الزوجة"});

addQuestion("islamic",0,{type:"mcq",question:"الغيب الذي لا يدرك إلا بالوحي يسمى:",options:["المطلق","النسبي","الحقيقي","البسيط"],answer:"المطلق"});

addQuestion("islamic",0,{type:"mcq",question:"عدم إدراك الأشياء يسمى جهلاً:",options:["مؤقتاً","مركباً","دائماً","بسيطاً"],answer:"بسيطاً"});

addQuestion("islamic",0,{type:"mcq",question:"الملائكة وأهل السماوات والأرض يدعون لـ:",options:["الباكي خشية الله","المتصدق سراً","الدال على الخير","المتحابين في الله"],answer:"الدال على الخير"});

addQuestion("islamic",0,{type:"mcq",question:"يشترط فيمن يقوم بالجرح والتعديل:",options:["القوة","المال","النسب","العلم"],answer:"العلم"});

addQuestion("islamic",0,{type:"mcq",question:"أفضل الصدقة عند الله تعالى صدقة:",options:["السر","العلانية","المنافسة","المفاخرة"],answer:"السر"});

addQuestion("islamic",0,{type:"mcq",question:"أول ما يسأل عنه المسلم يوم القيامة:",options:["الحج","الصلاة","الزكاة","المسؤولية"],answer:"الصلاة"});

addQuestion("islamic",0,{type:"mcq",question:"أعظم شر يمكن أن يصيب الإنسان:",options:["عداوة الأهل","خسارة المال","غضب الله","فساد الأبناء"],answer:"غضب الله"});

addQuestion("islamic",0,{type:"mcq",question:"ذنب متعلق بحق الله ويجب التوبة منه:",options:["الرياء","الغيبة","النميمة","السخرية"],answer:"الرياء"});

addQuestion("islamic",0,{type:"mcq",question:"المسؤولية في الإسلام مسؤولية:",options:["خاصة","قاصرة","شاملة","محصورة"],answer:"شاملة"});

addQuestion("islamic",0,{type:"mcq",question:"حرم الإسلام الإكراه على الفعل حفاظاً على:",options:["الدين","النفس","العقل","المال"],answer:"النفس"});

addQuestion("islamic",0,{type:"mcq",question:"حيازة الإنسان لما يمكن تقويمه بالنقود غالباً تسمى:",options:["العمل","التملك","الهبة","الوصية"],answer:"التملك"});

addQuestion("islamic",0,{type:"mcq",question:"الهبة تشمل ما يلي ما عدا:",options:["الهدية","الصدقة","الإبراء","الميراث"],answer:"الميراث"});

addQuestion("islamic",0,{type:"mcq",question:"العقوبة المرتبطة بتأمين الطرق العامة المسبلة:",options:["الحرابة","السرقة","النهب","الغصب"],answer:"الحرابة"});

addQuestion("islamic",0,{type:"mcq",question:"يختلف تسديد دين الميت وتنفيذ وصيته في:",options:["الوجوب","الأداء","المقدار","الزمن"],answer:"الزمن"});

addQuestion("islamic",0,{type:"mcq",question:"تتحقق العدالة بعلاقة القاضي بالناس من خلال:",options:["الهدية","المساواة","القسوة","الغضب"],answer:"المساواة"});

addQuestion("islamic",0,{type:"mcq",question:"يقضي القاضي عند امتناع المدعى عليه عن اليمين برد اليمين إلى:",options:["المتهم","الشهود","المنكر","المدعي"],answer:"المدعي"});

addQuestion("islamic",0,{type:"mcq",question:"قال تعالى فاقطعوا أيديهما جزاء بما كسبا نكالاً من الله تدل الآية على حد:",options:["الحرابة","القذف","الزنى","السرقة"],answer:"السرقة"});

addQuestion("islamic",0,{type:"mcq",question:"تنازل أولياء الدم عن القصاص يوجب الدية:",options:["المخففة","المؤجلة","المغلظة","على العاقلة"],answer:"المغلظة"});

addQuestion("islamic",0,{type:"mcq",question:"وضع الحرب بين الطرفين في صلح الحديبية لمدة:",options:["ثلاث","خمس","سبع","عشر"],answer:"عشر"});

addQuestion("islamic",0,{type:"mcq",question:"حبس الرسول ﷺ أبا سفيان ليمر عليه جيش الفتح بهدف:",options:["إظهار قوة المسلمين","إخفائه عن القوم","إعلامه بحقيقة الإسلام","إيصاله إلى قريش"],answer:"إظهار قوة المسلمين"});

addQuestion("islamic",0,{type:"mcq",question:"سبب هزيمة الروم في غزوة تبوك:",options:["العدد","الرعب","الاختلاف","الخيانات"],answer:"الرعب"});

addQuestion("islamic",0,{type:"mcq",question:"الغاية الأساسية من تعدد زوجات الرسول ﷺ:",options:["إرساء عادة التبني","تكثير النسل","إقرار عادة التعدد","تبليغ دين الله"],answer:"تبليغ دين الله"});

addQuestion("islamic",0,{type:"mcq",question:"توفي رجل وترك ابناً وزوجة وجداً وأخاً لأم، نصيب الجد:",options:["الثمن","السدس","الربع","النصف"],answer:"السدس"});

addQuestion("islamic",0,{type:"mcq",question:"اليهود الذين أعلنوا الغدر في غزوة الأحزاب:",options:["خيبر","بنو النضير","بنو قريظة","بنو قينقاع"],answer:"بنو قريظة"});

addQuestion("islamic",0,{type:"mcq",question:"الوفد الذي تراجع عن المباهلة:",options:["ثقيف","نجران","طيء","هوازن"],answer:"نجران"});

addQuestion("islamic",0,{type:"mcq",question:"الآية إذا جاء أجلهم فلا يستأخرون ساعة تدل على أثر الإيمان في حياة:",options:["الأسرة","الفرد","المجتمع","الدولة"],answer:"الفرد"});

addQuestion("islamic",0,{type:"mcq",question:"سمة اجتماعية لسد حاجة المحتاجين ومناصرة المظلوم:",options:["الأمن","العدل","التوكل","التعاون"],answer:"التعاون"});

addQuestion("islamic",0,{type:"mcq",question:"النبوة والرسالة تكون في فئة بلغت الكمال البشري وفقاً لـ:",options:["أهليتهم لحمل الرسالة","الجاه والمنصب","الجد والسعي","الذكاء والفطنة"],answer:"أهليتهم لحمل الرسالة"});

addQuestion("islamic",0,{type:"mcq",question:"حق الجماع يتضمن إحسان المعاملة بين الزوجين:",options:["الصداق والمهر","المعاشرة بالمعروف","صلة الرحم","التربية الحسنة"],answer:"المعاشرة بالمعروف"});

/* ========================= */
/* True / False - Islamic Test 2 */
/* ========================= */

addQuestion("islamic",1,{type:"tf",question:"ظل موضوع الدين يشغل الحيز الأكبر من عقل الإنسان عبر تاريخ البشرية.",answer:"true"});

addQuestion("islamic",1,{type:"tf",question:"سبق رسول الله ﷺ في تلقي الوحي مجموعة من الأنبياء والمرسلين السابقين.",answer:"true"});

addQuestion("islamic",1,{type:"tf",question:"الإعجاز العلمي في السنة النبوية من وسائل الدعوة إلى الإسلام في العصر الحديث.",answer:"true"});

addQuestion("islamic",1,{type:"tf",question:"التعاون فيه كسر لروح الأنانية المفرطة في حب الذات.",answer:"true"});

addQuestion("islamic",1,{type:"tf",question:"الصلاة والدعاء والذكر من الأمور المهمة لتجاوز المحن.",answer:"true"});

addQuestion("islamic",1,{type:"tf",question:"للمرأة الحق في العمل خارج المنزل دون ضوابط.",answer:"false"});

addQuestion("islamic",1,{type:"tf",question:"وضع الإنسان لنفسه طموحات غير متوقعة يعد من الفقر غير الحقيقي.",answer:"true"});

addQuestion("islamic",1,{type:"tf",question:"النية الصالحة من آداب المزاح.",answer:"true"});

addQuestion("islamic",1,{type:"tf",question:"من الأمور التي تجب فيها الوصية الواجبات الدينية مثل الحج.",answer:"true"});

addQuestion("islamic",1,{type:"tf",question:"الأب والجد يرثان فرضاً وعصبة.",answer:"true"});

addQuestion("islamic",1,{type:"tf",question:"تحرم الشفاعة في الحدود بعد وصولها إلى ولاة الأمر.",answer:"true"});

addQuestion("islamic",1,{type:"tf",question:"يشترط لإقامة حد الحرابة التكليف.",answer:"true"});

addQuestion("islamic",1,{type:"tf",question:"كانت بيعة الرضوان في العام السابع الهجري.",answer:"false"});

addQuestion("islamic",1,{type:"tf",question:"أحسن الرسول ﷺ وفادة همدان وكتب لهم كتاباً عهد لهم فيه ما سألوه.",answer:"true"});

addQuestion("islamic",1,{type:"tf",question:"تلاعبت الجاهلية بالأزمنة تقديماً وتأخيراً.",answer:"true"});

addQuestion("islamic",1,{type:"tf",question:"من دلائل حسن تعامل النبي ﷺ مع الخدم شهادة أنس رضي الله عنه.",answer:"true"});

addQuestion("islamic",1,{type:"tf",question:"التوكل يشمل العبادة والاستعانة والاعتقاد بالأسباب.",answer:"false"});

addQuestion("islamic",1,{type:"tf",question:"صدقة العلن تصون كرامة الفقير.",answer:"false"});

addQuestion("islamic",1,{type:"tf",question:"يجوز للحاكم القضاء بين الناس وهو غضبان.",answer:"false"});

addQuestion("islamic",1,{type:"tf",question:"استخلف الرسول ﷺ على المدينة يوم الفتح أبا ذر الغفاري.",answer:"false"});


/* ========================= */
/* Multiple Choice - Islamic Test 2 */
/* ========================= */

addQuestion("islamic",1,{type:"mcq",question:"قال تعالى (ألا له الخلق والأمر تبارك الله رب العالمين) تدل الآية على:",options:["الكمال المطلق","الربوبية","القدرة المطلقة","التنزيه عن التشبيه"],answer:"الكمال المطلق"});

addQuestion("islamic",1,{type:"mcq",question:"من آثار الإيمان في حياة الفرد:",options:["التعاون","الإيثار","السكينة","المساواة"],answer:"السكينة"});

addQuestion("islamic",1,{type:"mcq",question:"عند تعارض الجرح والتعديل يقدم:",options:["المتن","السند","التعديل","الجرح"],answer:"الجرح"});

addQuestion("islamic",1,{type:"mcq",question:"من يؤدي الصلاة في غير وقتها فالتوبة عليه:",options:["مستحبة","واجبة","مكروهة","مباحة"],answer:"واجبة"});

addQuestion("islamic",1,{type:"mcq",question:"التحاكم إلى غير ما أنزل الله ينشر في المجتمع:",options:["الاختلاف","الاستقرار","التكافل","الإنسانية"],answer:"الاختلاف"});

addQuestion("islamic",1,{type:"mcq",question:"المحافظة على مصالح الأمة وصيانة حقوقها من مهام:",options:["القاضي","الحاكم","الأب","الأجير"],answer:"الحاكم"});

addQuestion("islamic",1,{type:"mcq",question:"الناس جميعاً في ميزان الإسلام:",options:["متمايزون","متفاوتون","متساوون","مختلفون"],answer:"متساوون"});

addQuestion("islamic",1,{type:"mcq",question:"عدد الخصال التي منحها الله للشهيد:",options:["ثلاث","أربع","خمس","ست"],answer:"ست"});

addQuestion("islamic",1,{type:"mcq",question:"شرع الإسلام لحماية العقل تحريم:",options:["القتل","النصب","السرقة","المسكر"],answer:"المسكر"});

addQuestion("islamic",1,{type:"mcq",question:"تملك شرعي يحصل عليه الشخص بدون عمل عدا:",options:["الهبة","الهدية","الإرث","المعاوضات"],answer:"المعاوضات"});

addQuestion("islamic",1,{type:"mcq",question:"عطاء من شخص لآخر على سبيل التفضل حال الحياة تطوعاً يسمى:",options:["الوصية","الدين","الهبة","الميراث"],answer:"الهبة"});

addQuestion("islamic",1,{type:"mcq",question:"من الحقوق المتعلقة بالتركة:",options:["الوصية","النسب","المصاهرة","الموالاة"],answer:"الوصية"});

addQuestion("islamic",1,{type:"mcq",question:"مات رجل وترك بنتاً وزوجة فإن نصيب بنت الابن:",options:["الربع","الثمن","الثلث","السدس"],answer:"السدس"});

addQuestion("islamic",1,{type:"mcq",question:"جميع ما يلي من واجبات القاضي عدا:",options:["تحري الحقيقة","المساواة بين الخصوم","فصل الخصومات","الذكاء والفطنة"],answer:"الذكاء والفطنة"});

addQuestion("islamic",1,{type:"mcq",question:"يشترط لقبول الشهادة:",options:["المساواة","المحاباة","المحبة","العدالة"],answer:"العدالة"});

addQuestion("islamic",1,{type:"mcq",question:"وقعت غزوة حنين في السنة:",options:["التاسعة","الثامنة","السابعة","السادسة"],answer:"الثامنة"});

addQuestion("islamic",1,{type:"mcq",question:"كمن المنافقون للرسول ﷺ وهو عائد من غزوة:",options:["تبوك","خيبر","أحد","الأحزاب"],answer:"تبوك"});

addQuestion("islamic",1,{type:"mcq",question:"حكم المزاح في الأمور الشرعية:",options:["حرام","جائز","مندوب","مكروه"],answer:"حرام"});

addQuestion("islamic",1,{type:"mcq",question:"عدم إدراك الأشياء يسمى جهلاً:",options:["مؤقتاً","مركباً","دائماً","بسيطاً"],answer:"بسيطاً"});

addQuestion("islamic",1,{type:"mcq",question:"من الغيب النسبي:",options:["الجنة","الجن","الملائكة","الجاذبية"],answer:"الجاذبية"});

addQuestion("islamic",1,{type:"mcq",question:"تطبيق الحدود وإقامتها من حق:",options:["الحاكم","العالم","العابد","الفرد"],answer:"الحاكم"});

addQuestion("islamic",1,{type:"mcq",question:"التي أشارت على النبي ﷺ أن ينحر هديه ويحل إحرامه:",options:["أم حبيبة","حفصة","أم سلمة","عائشة"],answer:"أم سلمة"});

addQuestion("islamic",1,{type:"mcq",question:"اعتذر الرسول ﷺ لفقراء المؤمنين في تبوك بسبب:",options:["حزنهم","قلة الراحلة","المرض","قلة الغنائم"],answer:"قلة الراحلة"});

addQuestion("islamic",1,{type:"mcq",question:"قال (فوالله إن كان نبياً فالعننا لا نفلح) قالها وفد:",options:["بني الحارث","بني عامر","بني أسد","نصارى نجران"],answer:"نصارى نجران"});

addQuestion("islamic",1,{type:"mcq",question:"حقن طبيب شخصاً بإبرة عامداً قتله فمات يوجب:",options:["القصاص","الحبس","الدية","الصلب"],answer:"القصاص"});

addQuestion("islamic",1,{type:"mcq",question:"قدم التاريخ الإسلامي دليلاً على الخير عندما كانت الصدارة:",options:["الحضارة","العلوم","هدى الله ورسوله","المصالح"],answer:"هدى الله ورسوله"});

addQuestion("islamic",1,{type:"mcq",question:"قوله تعالى (فإنك بأعيننا) تشير إلى رعاية الله لنبيه:",options:["إبراهيم","موسى","عيسى","محمد"],answer:"محمد"});

addQuestion("islamic",1,{type:"mcq",question:"ومن دعا إلى ضلالة كان له من الإثم مثل:",options:["سيئات","آثام","ذنوب","معاصي"],answer:"آثام"});

addQuestion("islamic",1,{type:"mcq",question:"تنعقد الوصية بالإشارة إذا كان الموصي:",options:["أكمه","أعمى","أبكم","أعرج"],answer:"أبكم"});

addQuestion("islamic",1,{type:"mcq",question:"نزل قوله تعالى (وإما تخافن من قوم خيانة) بعد نقض العهد من يهود:",options:["خيبر","بني قريظة","بني النضير","بني قينقاع"],answer:"بني قينقاع"});

/* ========================= */
/* True / False - Islamic Test 3 */
/* ========================= */

addQuestion("islamic",2,{type:"tf",question:"الوحدانية تعني أن الله تعالى رب كل شيء ومالكه.",answer:"true"});

addQuestion("islamic",2,{type:"tf",question:"قد يتمكن العلماء من التعرف على الملائكة بوسائل العلم الحديثة.",answer:"false"});

addQuestion("islamic",2,{type:"tf",question:"الإعجاز العلمي في السنة يدعو المسلم للتعمق في العلوم الدنيوية.",answer:"true"});

addQuestion("islamic",2,{type:"tf",question:"من الخصائص العامة للدين أن الذين يبلغونه ملزمون بتطبيقه.",answer:"true"});

addQuestion("islamic",2,{type:"tf",question:"الأمن من الفزع الأكبر ميزة اختص الله تعالى بها الشهداء.",answer:"true"});

addQuestion("islamic",2,{type:"tf",question:"الانتحار جريمة تتلاءم مع فطرة الإنسان وحرصه على الحياة.",answer:"false"});

addQuestion("islamic",2,{type:"tf",question:"حدد النبي ﷺ ثمانية أصناف يظلهم الله يوم القيامة.",answer:"false"});

addQuestion("islamic",2,{type:"tf",question:"مدلول الشريعة الإسلامية ينحصر في أصول الحكم ونظامه.",answer:"false"});

addQuestion("islamic",2,{type:"tf",question:"المحسوبية تعمل على تكافؤ الفرص بين الناس.",answer:"false"});

addQuestion("islamic",2,{type:"tf",question:"تثبت جريمة القتل بالإقرار أو شاهدين.",answer:"true"});

addQuestion("islamic",2,{type:"tf",question:"الحدود الشرعية تكتسب صفة الحق الخاص.",answer:"false"});

addQuestion("islamic",2,{type:"tf",question:"الورثة ملزمون بتسديد جميع ديون مورثهم ولو استغرقت التركة كاملة.",answer:"true"});

addQuestion("islamic",2,{type:"tf",question:"تتبع الجزئيات في الأحكام الشرعية من طرق معرفة مقاصد الشريعة.",answer:"true"});

addQuestion("islamic",2,{type:"tf",question:"من الأمور التي تجب فيها الوصية الواجبات الدينية مثل الحج.",answer:"true"});

addQuestion("islamic",2,{type:"tf",question:"المسلم يلبي النداء دفاعاً عن العقيدة والوطن في العسر واليسر.",answer:"true"});

addQuestion("islamic",2,{type:"tf",question:"كانت ثياب النبي ﷺ من الحرير.",answer:"false"});

addQuestion("islamic",2,{type:"tf",question:"التوكل يشمل العبادة والاستعانة والاعتقاد بالأسباب.",answer:"true"});

addQuestion("islamic",2,{type:"tf",question:"قدم وفد تميم إلى الرسول ﷺ للمباهلة والمجادلة.",answer:"false"});

addQuestion("islamic",2,{type:"tf",question:"كتم الرسول ﷺ وجهته إلى مكة بغرض مفاجأة العدو.",answer:"true"});

addQuestion("islamic",2,{type:"tf",question:"تحريم الربا من المبادئ التي أعلنها الرسول ﷺ في خطبة حجة الوداع.",answer:"true"});

/* ========================= */
/* Multiple Choice - Islamic Test 3 */
/* ========================= */

addQuestion("islamic",2,{type:"mcq",question:"كلفه الله بإبلاغ شريعة جديدة للناس:",options:["النبي","الولي","العالم","الرسول"],answer:"الرسول"});

addQuestion("islamic",2,{type:"mcq",question:"دلت الآية (وما أنا بطارد الذين آمنوا) على جهل قوم نوح بـ:",options:["معيار التفاضل","حقيقة خلقهم","رسالة نبيهم","من أسلم"],answer:"معيار التفاضل"});

addQuestion("islamic",2,{type:"mcq",question:"تكفل الله بحفظ وجمع وبيان:",options:["المعجزة","الرسالة","العقل","القرآن الكريم"],answer:"القرآن الكريم"});

addQuestion("islamic",2,{type:"mcq",question:"من آثار الإيمان في حياة الفرد:",options:["التعاون","الإيثار","السكينة","المساواة"],answer:"السكينة"});

addQuestion("islamic",2,{type:"mcq",question:"كلما قل الإيمان زادت:",options:["المادة","الابتلاءات","الجريمة","الانتصارات"],answer:"الجريمة"});

addQuestion("islamic",2,{type:"mcq",question:"منهج علمي هدفه التثبت من النصوص المروية للحديث:",options:["الجرح","التعديل","السند","الضبط"],answer:"السند"});

addQuestion("islamic",2,{type:"mcq",question:"ما كان هدفه مقروناً بنية صالحة يعد مزاحاً:",options:["مذموماً","محرماً","محموداً","ممنوعاً"],answer:"محموداً"});

addQuestion("islamic",2,{type:"mcq",question:"المرأة التي حكم عليها الرسول ﷺ بحد السرقة:",options:["نسيبة بنت كعب","فاطمة بنت الأسود","أسماء بنت عميس","أسماء بنت أبي بكر"],answer:"فاطمة بنت الأسود"});

addQuestion("islamic",2,{type:"mcq",question:"يأخذ الناس من حسناته لأنه وقع في أعراضهم يسمى:",options:["مقسط","مسرف","مفلس","مقتر"],answer:"مفلس"});

addQuestion("islamic",2,{type:"mcq",question:"عدم تطبيق الأحكام الشرعية من صور الفساد:",options:["العقيدي","التشريعي","الخلقي","السياسي"],answer:"التشريعي"});

addQuestion("islamic",2,{type:"mcq",question:"من الذنوب المتعلقة بحق الناس:",options:["الظلم","النفاق","شرب الخمر","الرياء"],answer:"الظلم"});

addQuestion("islamic",2,{type:"mcq",question:"من خصائص المسؤولية في الإسلام:",options:["المهام والسلطات","النصائح","الصلاة","الحدود"],answer:"المهام والسلطات"});

addQuestion("islamic",2,{type:"mcq",question:"الصلاة تؤدي لصحة البدن بشرط:",options:["الخشوع","الكثرة","التعود","السرية"],answer:"الخشوع"});

addQuestion("islamic",2,{type:"mcq",question:"من أهم واجبات القاضي:",options:["المساواة بين الخصوم","الرشد","العلم","الولاية"],answer:"المساواة بين الخصوم"});

addQuestion("islamic",2,{type:"mcq",question:"حكم الحرابة:",options:["حرام","مباح","مكروه","جائز"],answer:"حرام"});

addQuestion("islamic",2,{type:"mcq",question:"من الضوابط الشرعية للتملك:",options:["العمل الجاد","الهبة","الشبهات","التصرف الرشيد"],answer:"التصرف الرشيد"});

addQuestion("islamic",2,{type:"mcq",question:"نصيب الأخ لأم:",options:["السدس","الثلث","الربع","النصف"],answer:"السدس"});

addQuestion("islamic",2,{type:"mcq",question:"جميع ما يلي من الهبات عدا:",options:["الصدقة","الزكاة","الهدية","الإبراء"],answer:"الزكاة"});

addQuestion("islamic",2,{type:"mcq",question:"من الوارثين فرضاً:",options:["الأخ لأب","ابن الابن","الأخ لأم","الأخ الشقيق"],answer:"الأخ لأم"});

addQuestion("islamic",2,{type:"mcq",question:"حرم الإسلام الإكراه حفاظاً على:",options:["الدين","النفس","العقل","المال"],answer:"العقل"});

addQuestion("islamic",2,{type:"mcq",question:"يشترط لإقامة حد السرقة:",options:["الغنى","الحاجة","المرض","البلوغ"],answer:"البلوغ"});

addQuestion("islamic",2,{type:"mcq",question:"تثبت الدعوى بـ:",options:["حكم الحاكم","إقرار المدعى عليه","صدق المدعي","العلم بالدعوى"],answer:"إقرار المدعى عليه"});

addQuestion("islamic",2,{type:"mcq",question:"القائل والله ما رأيت ملكاً يعظمه أصحابه مثل ما يعظم أصحاب محمد:",options:["عتبة بن ربيعة","المغيرة بن شعبة","سهيل بن عمرو","عروة بن مسعود"],answer:"عروة بن مسعود"});

addQuestion("islamic",2,{type:"mcq",question:"سبب تحول معركة حنين إلى النصر:",options:["ثبات الرسول ﷺ","كثرة العدد","هروب هوازن","الأساليب العسكرية"],answer:"ثبات الرسول ﷺ"});

addQuestion("islamic",2,{type:"mcq",question:"سبب هزيمة الروم في تبوك:",options:["العدد","الرعب","الاختلاف","الخيانة"],answer:"الرعب"});

addQuestion("islamic",2,{type:"mcq",question:"سبب إرسال حاطب رسالته إلى قريش:",options:["جائزة قريش","تساهل","ارتداد","حماية قرابته"],answer:"حماية قرابته"});

addQuestion("islamic",2,{type:"mcq",question:"تزوجها الرسول ﷺ ليبطل عادة التبني:",options:["سودة بنت زمعة","زينب بنت جحش","هند بنت أبي أمية","زينب بنت خزيمة"],answer:"زينب بنت جحش"});

addQuestion("islamic",2,{type:"mcq",question:"ومن دعا إلى ضلالة كان له من الإثم مثل:",options:["سيئات","آثام","ذنوب","معاصي"],answer:"آثام"});

addQuestion("islamic",2,{type:"mcq",question:"تنعقد الوصية بالإشارة إذا كان الموصي:",options:["أكمه","أعمى","أبكم","أعرج"],answer:"أبكم"});

addQuestion("islamic",2,{type:"mcq",question:"نزل قوله تعالى (وإما تخافن من قوم خيانة) بعد نقض العهد من يهود:",options:["خيبر","بني قريظة","بني النضير","بني قينقاع"],answer:"بني قينقاع"});
/* ========= العربية ========= */

/* ========================= */
/* صح وخطأ (20 سؤال) */
/* ========================= */

addQuestion("arabic",0,{type:"tf",question:"(راحم) اسم فاعل عامل و(عملاً) مفعول به لاسم الفاعل",answer:"true"});
addQuestion("arabic",0,{type:"tf",question:"(بين) ظرف مكان مبني في هذا السياق",answer:"true"});
addQuestion("arabic",0,{type:"tf",question:"الاستثناء تام منفي فيجوز نصب (المهمل) على الاستثناء",answer:"true"});
addQuestion("arabic",0,{type:"tf",question:"المنادى في الحديث (يا باغي الخير) شبيه بالمضاف",answer:"false"});
addQuestion("arabic",0,{type:"tf",question:"الفاء حرف عطف يقتضي التبعية",answer:"true"});
addQuestion("arabic",0,{type:"tf",question:"(نفسه) هنا توكيد معنوي",answer:"false"});
addQuestion("arabic",0,{type:"tf",question:"كتاب البخلاء لابن المقفع",answer:"false"});
addQuestion("arabic",0,{type:"tf",question:"مسرحية أهل الكهف لأحمد حسن الزيات",answer:"false"});
addQuestion("arabic",0,{type:"tf",question:"الغرض البلاغي في النص هو التقرير",answer:"true"});
addQuestion("arabic",0,{type:"tf",question:"مفرد أفواه هو فوه",answer:"false"});
addQuestion("arabic",0,{type:"tf",question:"العاطفة في قصيدة كن بلسماً هي التفاؤل والإنسانية العامة",answer:"false"});
addQuestion("arabic",0,{type:"tf",question:"السياب يرمز لبغداد ليعطي تجربة إنسانية شاملة",answer:"true"});
addQuestion("arabic",0,{type:"tf",question:"المنهج التاريخي يربط الأدب ببيئته وزمانه",answer:"true"});
addQuestion("arabic",0,{type:"tf",question:"التجربة الشعرية تقوم على الفكر فقط",answer:"false"});
addQuestion("arabic",0,{type:"tf",question:"(من) في التعبير للتبعيض",answer:"true"});
addQuestion("arabic",0,{type:"tf",question:"الثورة توحي بالتغيير الجذري الشامل",answer:"true"});
addQuestion("arabic",0,{type:"tf",question:"الاستشراف هو محاولة قراءة المستقبل",answer:"true"});
addQuestion("arabic",0,{type:"tf",question:"المقالة يغلب عليها الطابع الذاتي أكثر من الموضوعي",answer:"false"});
addQuestion("arabic",0,{type:"tf",question:"اتفاق نهايات الجمل يسمى سجعاً",answer:"true"});
addQuestion("arabic",0,{type:"tf",question:"الخاتمة تلخص أهم النتائج",answer:"true"});


/* ========================= */
/* اختيار من متعدد (30 سؤال) */
/* ========================= */

addQuestion("arabic",0,{type:"mcq",question:"(حنانيك يا الله) حذف فعله لأنه مصدر:",options:["دل على الأمر","سماعي","دل على النهي","دل على الاستفهام"],answer:"دل على النهي"});

addQuestion("arabic",0,{type:"mcq",question:"(وقف الجندي وسلاحه وقوف الأبطال) عدد المفعولات:",options:["خمسة","أربعة","ثلاثة","اثنان"],answer:"ثلاثة"});

addQuestion("arabic",0,{type:"mcq",question:"(يسعد الناس بعودة المجاهد منتصراً) نوع الحال:",options:["مفرد","جملة فعلية","جملة اسمية","شبه جملة"],answer:"مفرد"});

addQuestion("arabic",0,{type:"mcq",question:"(أنا أكثر منك تجربة) التمييز محول عن:",options:["فاعل","مفعول به","مبتدأ","ظرف"],answer:"فاعل"});

addQuestion("arabic",0,{type:"mcq",question:"(في المدرسة 12 معلمة) يكتب العدد:",options:["اثنا عشرة","اثنتا عشر","اثنتا عشرة","اثنتي عشرة"],answer:"اثنتا عشرة"});

addQuestion("arabic",0,{type:"mcq",question:"(يكتمل القمر في الليلة 14) العدد لفظاً:",options:["الرابع عشر","الرابعة عشر","الرابع عشرة","الرابعة عشرة"],answer:"الرابعة عشرة"});

addQuestion("arabic",0,{type:"mcq",question:"تحويل (قصيدة قوية الصدى) إلى نعت سببي:",options:["قوياً صداها","صداها قوي","قوي صداها","قوية صداها"],answer:"قوية صداها"});

addQuestion("arabic",0,{type:"mcq",question:"الجملة التي تحتوي على بدل:",options:["أعجبني إبداع المعلم","أعجبني المعلم إبداعه","إبداع المعلم أعجبني","أعجبني المعلم إبداعاً"],answer:"أعجبني المعلم إبداعه"});

addQuestion("arabic",0,{type:"mcq",question:"نبحث عن كلمة (الشدائد) في باب:",options:["الهمزة","اللام","الشين","الدال"],answer:"الشين"});

addQuestion("arabic",0,{type:"mcq",question:"من مظاهر الاتصال بالحضارة ما عدا:",options:["إرسال البعثات","إصدار المجلات","نشر المخطوطات","ترجمة المعلقات"],answer:"ترجمة المعلقات"});

addQuestion("arabic",0,{type:"mcq",question:"من سمات الكلاسيكية:",options:["تجديد الأوزان","العناية بالصياغة","عذوبة الألفاظ","التعبير عن الذات"],answer:"العناية بالصياغة"});

addQuestion("arabic",0,{type:"mcq",question:"ليس من خصائص الشعر الرومانسي:",options:["الامتزاج بالطبيعة","الوحدة العضوية","جزالة الألفاظ","سهولة الألفاظ"],answer:"جزالة الألفاظ"});

addQuestion("arabic",0,{type:"mcq",question:"المدرسة التي رفضت الاستسلام لليأس:",options:["الكلاسيكية","الرومانسية","الواقعية","الرمزية"],answer:"الواقعية"});

addQuestion("arabic",0,{type:"mcq",question:"صرح الشاعر بمنفاه سرنديب لأنها مصدر:",options:["دهشته","سروره","متاعبه","اطمئنانه"],answer:"متاعبه"});

addQuestion("arabic",0,{type:"mcq",question:"(وللأوطان في دم كل حر...) الصورة البيانية:",options:["تشبيه بليغ","مجاز مرسل","استعارة تصريحية","استعارة مكنية"],answer:"استعارة مكنية"});

addQuestion("arabic",0,{type:"mcq",question:"الكلمة الناقصة: يا ... وما به من عبرة للمستهام:",options:["للشروق","للحنين","للغروب","للفراق"],answer:"للغروب"});

addQuestion("arabic",0,{type:"mcq",question:"المحسن البديعي بين (تصفيق المصفقين - ذم القادحين):",options:["طباق","مقابلة","سجع","جناس"],answer:"مقابلة"});

addQuestion("arabic",0,{type:"mcq",question:"تميزت مقالة لو أحسن الناس بـ:",options:["غرابة الألفاظ","حسن الإيقاع","الخيال الجامح","الرمزية"],answer:"حسن الإيقاع"});

addQuestion("arabic",0,{type:"mcq",question:"الضمير في (لنا) يعود إلى:",options:["الشاعر","الشعب","المعتدون","الأجيال"],answer:"المعتدون"});

addQuestion("arabic",0,{type:"mcq",question:"إعراب (زحفاً) في العبارة:",options:["حال","مفعول به","تمييز","معطوف"],answer:"حال"});

addQuestion("arabic",0,{type:"mcq",question:"ليس من خصائص الأسلوب العلمي:",options:["عرض الأفكار","وضوح المعنى","البعد عن العاطفة","التوسع في الخيال"],answer:"التوسع في الخيال"});

addQuestion("arabic",0,{type:"mcq",question:"الإقناع في المقالة يتحقق بـ:",options:["العرض الجذاب","تنوع الأسلوب","سلامة الفكر","جمال التصوير"],answer:"سلامة الفكر"});

addQuestion("arabic",0,{type:"mcq",question:"المقصود بالتصدع:",options:["التفتت","التشقق","التباعد","التعاضد"],answer:"التشقق"});

addQuestion("arabic",0,{type:"mcq",question:"(تتبار) فعل مضارع:",options:["مبني","مجزوم","مرفوع","منصوب"],answer:"مجزوم"});

addQuestion("arabic",0,{type:"mcq",question:"ليس من معاني الحقد:",options:["النميمة","الغبطة","الكره","الغيبة"],answer:"الغبطة"});

addQuestion("arabic",0,{type:"mcq",question:"(حجر) اسم:",options:["مشتق","جامد","آلة","مفعول"],answer:"جامد"});

addQuestion("arabic",0,{type:"mcq",question:"(ثانياً: تلوث الهواء) جزء من:",options:["المقدمة","العرض","الخاتمة","الاستشهاد"],answer:"العرض"});

addQuestion("arabic",0,{type:"mcq",question:"الكلمة التي مفردها بتاء مربوطة:",options:["وجوه","صفات","أفواه","مكاره"],answer:"مكاره"});

addQuestion("arabic",0,{type:"mcq",question:"التعبير عن الاستعداد:",options:["أخذ على يده","أخذ يقلب الأمور","أخذ للأمر عدته","أخذ حذره"],answer:"أخذ للأمر عدته"});

addQuestion("arabic",0,{type:"mcq",question:"الحديث يدل على:",options:["فضل المسلم","أجر المسلم","خلق المسلم","سعادة المسلم"],answer:"خلق المسلم"});
/* ========================= */
/* True / False - Arabic Test 2 */
/* ========================= */

addQuestion("arabic",1,{type:"tf",question:"(آت القربى حقه طلبًا للأجر) العامل في نصب المفعول لأجله هو الفعل آت.",answer:"true"});

addQuestion("arabic",1,{type:"tf",question:"كلمة (بين) من الظروف المبنية.",answer:"false"});

addQuestion("arabic",1,{type:"tf",question:"(قد ذل الناس إلا المؤمنين) حكم المستثنى في هذه الجملة واجب النصب.",answer:"true"});

addQuestion("arabic",1,{type:"tf",question:"(يا قاسيًا قلبه ارحم الفقراء) نوع المنادى في هذه الجملة مضاف.",answer:"false"});

addQuestion("arabic",1,{type:"tf",question:"الفاء في جملة (يمر الطعام من الفم فالمريء) تفيد التراخي.",answer:"false"});

addQuestion("arabic",1,{type:"tf",question:"في جملة (المذاكرة لا لا تهملها) جاء التوكيد اللفظي جملة.",answer:"false"});

addQuestion("arabic",1,{type:"tf",question:"كتاب تاج العروس من مؤلفات المرتضى الزبيدي.",answer:"true"});

addQuestion("arabic",1,{type:"tf",question:"كتاب المقدمة لابن خلدون من الكتب التي أثرت في رواد النثر العربي.",answer:"true"});

addQuestion("arabic",1,{type:"tf",question:"الغرض البلاغي في البيت (يا ليتني قد مت قبل فراقكم) هو التحسر والحزن.",answer:"true"});

addQuestion("arabic",1,{type:"tf",question:"معنى كلمة العلم في البيت (بورك الجرح الذي تحمله شرفًا تحت ظلال العلم) هو الراية.",answer:"true"});

addQuestion("arabic",1,{type:"tf",question:"عاطفة الشاعر في قصيدة كن بلسمًا منبثقة من فلسفته الخاصة في الحب.",answer:"true"});

addQuestion("arabic",1,{type:"tf",question:"في قول الشاعر (في السمع باقية تبكي بلا شجر) يوجد تصريح مباشر بحبه للمدينة.",answer:"false"});

addQuestion("arabic",1,{type:"tf",question:"المنهج التاريخي الاجتماعي في النقد يتناول المؤثرات الخارجية للنص الأدبي.",answer:"true"});

addQuestion("arabic",1,{type:"tf",question:"الصور التعبيرية في العمل الأدبي هي امتزاج الفكر بالعاطفة.",answer:"false"});

addQuestion("arabic",1,{type:"tf",question:"اللام في قوله تعالى (وإن لكم في الأنعام لعبرة) لام التعليل.",answer:"false"});

addQuestion("arabic",1,{type:"tf",question:"مصطلح التكنولوجيا يعني العلوم التطبيقية.",answer:"true"});

addQuestion("arabic",1,{type:"tf",question:"رصد الواقع الحالي يساعد على استشراف المستقبل.",answer:"true"});

addQuestion("arabic",1,{type:"tf",question:"عرض الكاتب موضوع العولمة ممتزجًا بوجدانه وعاطفته.",answer:"false"});

addQuestion("arabic",1,{type:"tf",question:"في العبارة (لا يرى في العولمة شرًا يحذر ولا معنى ينكر) يوجد سجع.",answer:"true"});

addQuestion("arabic",1,{type:"tf",question:"تناول الأفكار الرئيسية بالتفصيل يمثل خاتمة الموضوع التعبيري.",answer:"false"});
/* ========================= */
/* Multiple Choice - Arabic Test 2 */
/* ========================= */

addQuestion("arabic",1,{type:"mcq",question:"(مهلاً فإن في السرعة الندامة) حذف الفعل لأن المصدر مهلاً يدل على:",options:["الدعاء","الرجاء","الأمر","النهي"],answer:"الأمر"});

addQuestion("arabic",1,{type:"mcq",question:"عدد المفعولات في عبارة (خرجت وطلوع الشمس طلبًا للرزق وعدت قبل الظهيرة):",options:["ستة","خمسة","أربعة","ثلاثة"],answer:"ثلاثة"});

addQuestion("arabic",1,{type:"mcq",question:"نوع الحال في قوله تعالى (ولا تقربوا الصلاة وأنتم سكارى):",options:["مفرد","جملة فعلية","جملة اسمية","شبه جملة"],answer:"جملة اسمية"});

addQuestion("arabic",1,{type:"mcq",question:"التمييز في جملة (أنا أكثر منك تجربةً) محول عن:",options:["فاعل","مفعول به","مبتدأ","ظرف"],answer:"مبتدأ"});

addQuestion("arabic",1,{type:"mcq",question:"يكتب العدد 12 في جملة (قرأت 12 جزءاً):",options:["اثنا عشر","اثني عشر","اثنتا عشر","اثنتي عشر"],answer:"اثني عشر"});

addQuestion("arabic",1,{type:"mcq",question:"يكتب العدد 14 في جملة (يكتمل القمر في الليلة 14):",options:["الرابع عشر","الرابعة عشر","الرابع عشرة","الرابعة عشرة"],answer:"الرابعة عشرة"});

addQuestion("arabic",1,{type:"mcq",question:"لتحويل النعت الحقيقي إلى سببي في (هذه لوحة شكلها جميل) نقول:",options:["هذه لوحة جميلة الشكل","هذه لوحة جميل شكلها","هذه لوحة جميلة شكلاً","هذه لوحة جميلة أشكالاً"],answer:"هذه لوحة جميل شكلها"});

addQuestion("arabic",1,{type:"mcq",question:"الجملة التي تحتوي على بدل:",options:["أدهشني ذكاء الولد","أدهشني الولد ذكاؤه","ذكاء الولد أدهشني","أدهشني الولد ذكاء"],answer:"أدهشني الولد ذكاؤه"});

addQuestion("arabic",1,{type:"mcq",question:"نكشف عن كلمة (نزدهر) في مختار الصحاح في باب:",options:["الياء","الزاي","الدال","الراء"],answer:"الزاي"});

addQuestion("arabic",1,{type:"mcq",question:"من عوامل النهضة الأدبية ما عدا:",options:["اليقظة الوطنية","إحياء التراث","الاتصال بحضارة العصر","تشجيع الشعراء"],answer:"تشجيع الشعراء"});

addQuestion("arabic",1,{type:"mcq",question:"من سمات المدرسة الكلاسيكية:",options:["صدمة الحضارة","تصوير آلام الأمة","الهروب للخيال","الإحباط"],answer:"تصوير آلام الأمة"});

addQuestion("arabic",1,{type:"mcq",question:"من خصائص المدرسة الرومانسية تحقيق وحدة:",options:["الموضوع","المعنى","اللفظ","البيت"],answer:"الموضوع"});

addQuestion("arabic",1,{type:"mcq",question:"قصيدة بطاقة هوية لمحمود درويش تنتمي إلى:",options:["شعر التفعيلة","الشعر العمودي","الشعر المقفى","الشعر الملحمي"],answer:"شعر التفعيلة"});

addQuestion("arabic",1,{type:"mcq",question:"كلمة (خواضعاً) توحي بـ:",options:["البعد والشوق","الاستسلام والانكسار","التمرد والثورة","الذل والمهانة"],answer:"الاستسلام والانكسار"});

addQuestion("arabic",1,{type:"mcq",question:"(دمع لا يكفكف) كناية عن:",options:["الحسرة","غزارة الدمع","التضحية","الخراب"],answer:"غزارة الدمع"});

addQuestion("arabic",1,{type:"mcq",question:"ينتهي البيت (عبثت طوافي في البلاد...) بكلمة:",options:["ليس دوائي","ليس شفائي","لا لشفائي","لا استشفائي"],answer:"لا استشفائي"});

addQuestion("arabic",1,{type:"mcq",question:"العلاقة البلاغية بين (لا يفرح بالجديد ولا يكره القديم):",options:["جناس","طباق","مقابلة","سجع"],answer:"مقابلة"});

addQuestion("arabic",1,{type:"mcq",question:"ما لا يضيف موسيقى لنص (لو أحسن الناس):",options:["الجمل القصيرة","السجع","الطباق","الأسلوب الخبري"],answer:"الأسلوب الخبري"});

addQuestion("arabic",1,{type:"mcq",question:"توحي كلمة (نحفر) في (سنظل نحفر في الجدار) بـ:",options:["الظلم","الحزن","الحيرة","الإصرار"],answer:"الإصرار"});

addQuestion("arabic",1,{type:"mcq",question:"إعراب كلمة (دم) في (دم ومصيدة):",options:["اسم إن","خبر إن","مبتدأ","بدل"],answer:"بدل"});

addQuestion("arabic",1,{type:"mcq",question:"من خصائص الأسلوب العلمي:",options:["الصور البيانية","المشاعر","الحقائق العلمية","الخيال"],answer:"الحقائق العلمية"});

addQuestion("arabic",1,{type:"mcq",question:"من سمات المقالة ما عدا:",options:["صحة الأسلوب","وضوح الأسلوب","جمال الأسلوب","تنوع الأسلوب"],answer:"تنوع الأسلوب"});

addQuestion("arabic",1,{type:"mcq",question:"معنى تزهو في العبارة:",options:["تغضب","تكبر","تعلو","تفخر"],answer:"تفخر"});

addQuestion("arabic",1,{type:"mcq",question:"إعراب كلمة مكة في الجملة:",options:["الفتحة","الضمة","الكسرة","السكون"],answer:"الفتحة"});

addQuestion("arabic",1,{type:"mcq",question:"السلوك الذي لا يرتبط بالحقد:",options:["النميمة","الغبطة","الكره","الغيبة"],answer:"الغبطة"});

addQuestion("arabic",1,{type:"mcq",question:"حرف العطف أم يفيد:",options:["التعيين","التسوية","الإضراب","التخيير"],answer:"التسوية"});

addQuestion("arabic",1,{type:"mcq",question:"العنصر الذي يتناول الأفكار بالتفصيل في الموضوع:",options:["المقدمة","العرض","الخاتمة","الهامش"],answer:"العرض"});

addQuestion("arabic",1,{type:"mcq",question:"الكلمة التي فيها خطأ نحوي في (أنا لا أسع إلا في الخير):",options:["الخير","أسع","أنا","إلا"],answer:"أسع"});

addQuestion("arabic",1,{type:"mcq",question:"رجل إمه يطلق على من ليس له:",options:["رأي","علم","عقل","إحساس"],answer:"رأي"});

addQuestion("arabic",1,{type:"mcq",question:"البيت (إذا كنت في نعمة فارعها) يدل على:",options:["تعدد النعم","تنوع النعم","استمرار النعم","مظاهر النعم"],answer:"استمرار النعم"});

/* ========================= */
/* True / False - Arabic Test 2 */
/* ========================= */

addQuestion("arabic",2,{type:"tf",question:"العامل في نصب المفعول لأجله في (اتل القرآن طلباً للأجر) هو الفعل اتل.",answer:"true"});

addQuestion("arabic",2,{type:"tf",question:"كلمة (بين) في قول الشاعر (أمتي هل لك بين الأمم) من الظروف المبنية.",answer:"false"});

addQuestion("arabic",2,{type:"tf",question:"في الجملة (قد يذل الناس إلا المؤمنين) حكم المستثنى واجب النصب.",answer:"true"});

addQuestion("arabic",2,{type:"tf",question:"في الجملة (يا قاسياً قلبه ارحم الفقراء) نوع المنادى مضاف.",answer:"false"});

addQuestion("arabic",2,{type:"tf",question:"الفاء في الجملة (يمر الطعام من الفم فالبلعوم) تفيد التراخي.",answer:"false"});

addQuestion("arabic",2,{type:"tf",question:"في الجملة (المذاكرة لا لا تهملها) جاء التوكيد اللفظي جملة.",answer:"false"});

addQuestion("arabic",2,{type:"tf",question:"كتاب تاج العروس للمرتضى الزبيدي من المعاجم التي تأخذ بأوائل الكلمات.",answer:"false"});

addQuestion("arabic",2,{type:"tf",question:"كتاب المقدمة لابن خلدون من الكتب التي أثرت في كتابات رواد النثر العربي.",answer:"true"});

addQuestion("arabic",2,{type:"tf",question:"الغرض من البيت (يا ليتني قد مت قبل فراقكم) هو التحسر والحزن.",answer:"true"});

addQuestion("arabic",2,{type:"tf",question:"كلمة (العلم) في قول الشاعر (شرفاً تحت ظلال العلم) تعني الراية.",answer:"true"});

addQuestion("arabic",2,{type:"tf",question:"في نص قيم اجتماعية دعا الكاتب إلى نبذ الأنانية المفرطة.",answer:"true"});

addQuestion("arabic",2,{type:"tf",question:"اشتهر البارودي بلقب شاعر النيل.",answer:"false"});

addQuestion("arabic",2,{type:"tf",question:"يعتبر أحمد شوقي رائد المسرح الشعري العربي.",answer:"true"});

addQuestion("arabic",2,{type:"tf",question:"تعدد الأغراض في القصيدة الواحدة من سمات مدرسة الإحياء والبعث.",answer:"true"});

addQuestion("arabic",2,{type:"tf",question:"كلمة الضغينة تعني الحقد الدفين.",answer:"true"});

addQuestion("arabic",2,{type:"tf",question:"الاسم المنقوص إذا كان نكرة في حالة الرفع تحذف ياؤه.",answer:"true"});

addQuestion("arabic",2,{type:"tf",question:"في الجملة (لولا العلم لساد الجهل) الخبر محذوف وجوباً.",answer:"true"});

addQuestion("arabic",2,{type:"tf",question:"جمع المؤنث السالم يكون بزيادة واو ونون.",answer:"false"});

addQuestion("arabic",2,{type:"tf",question:"الجملة الواقعة خبراً لها محل من الإعراب.",answer:"true"});

addQuestion("arabic",2,{type:"tf",question:"اسم الفاعل من الفعل استخرج هو مستخرج.",answer:"true"});
/* ========================= */
/* Multiple Choice - Arabic Test 2 */
/* ========================= */

addQuestion("arabic",2,{type:"mcq",question:"نكشف عن كلمة (المرء) في المعجم في مادة:",options:["م ر أ","م ر ي","م ر ر","ر أ ي"],answer:"م ر ر"});

addQuestion("arabic",2,{type:"mcq",question:"الفعل (يعد) في جملة (يعد العلم سلاحاً) هو فعل:",options:["لازم","متعدٍ لمفعولين","متعدٍ لمفعول واحد","جامد"],answer:"متعدٍ لمفعولين"});

addQuestion("arabic",2,{type:"mcq",question:"نوع لا في جملة (لا طالب علم مقصر):",options:["ناهية","عاطفة","نافية للجنس","نافية للفعل"],answer:"نافية للجنس"});

addQuestion("arabic",2,{type:"mcq",question:"نوع ما في جملة (ما أجمل السماء):",options:["استفهامية","موصولة","تعجبية","نافية"],answer:"تعجبية"});

addQuestion("arabic",2,{type:"mcq",question:"إعراب (أبا) في جملة (يا أبا بكر):",options:["منادى مبني على الضم","منادى منصوب بالألف","منادى منصوب بالفتحة","مضاف إليه"],answer:"منادى منصوب بالألف"});

addQuestion("arabic",2,{type:"mcq",question:"المدرسة الأدبية التي ينتمي إليها إيليا أبو ماضي:",options:["الديوان","المهجر","أبوللو","الإحياء"],answer:"المهجر"});

addQuestion("arabic",2,{type:"mcq",question:"صاحب قصيدة المواكب هو:",options:["مطران","جبران خليل جبران","العقاد","أحمد شوقي"],answer:"جبران خليل جبران"});

addQuestion("arabic",2,{type:"mcq",question:"العنصر الذي يمثل الصراع في المسرحية:",options:["الشخصيات","الحوار والأحداث","الديكور","الفصل المسرحي"],answer:"الحوار والأحداث"});

addQuestion("arabic",2,{type:"mcq",question:"مضاد كلمة الإقدام:",options:["الشجاعة","الإحجام","التهور","التقدم"],answer:"الإحجام"});

addQuestion("arabic",2,{type:"mcq",question:"مرادف كلمة (يفل) في قولهم يفل الجيش:",options:["يقوي","يهزم ويكسر","يجمع","يحمي"],answer:"يهزم ويكسر"});

addQuestion("arabic",2,{type:"mcq",question:"الجملة التي تحتوي على بدل:",options:["جاء الطالب المجتهد","أعجبني الطالب خلقه","رأيت الطالب نفسه","مررت بالطالب"],answer:"أعجبني الطالب خلقه"});

addQuestion("arabic",2,{type:"mcq",question:"نوع كم في قوله تعالى (كم من فئة قليلة غلبت فئة كثيرة):",options:["استفهامية","خبرية","موصولة","تعجبية"],answer:"خبرية"});

addQuestion("arabic",2,{type:"mcq",question:"اسم المكان من الفعل لعب:",options:["ملعيب","ملعب","لاعب","لعبة"],answer:"ملعب"});

addQuestion("arabic",2,{type:"mcq",question:"الفعل المسند إلى واو الجماعة من يسعى:",options:["يسعيون","يسعون","يسعيان","تسعين"],answer:"يسعون"});

addQuestion("arabic",2,{type:"mcq",question:"العلاقة بين البيت (فإن المعاصي تزيل النعم) وما قبله:",options:["نتيجة","تعليل","توكيد","تفصيل"],answer:"تعليل"});

addQuestion("arabic",2,{type:"mcq",question:"الغرض الشعري في نص رسالة إلى ابن:",options:["المديح","النصح والإرشاد","الفخر","الرثاء"],answer:"النصح والإرشاد"});

addQuestion("arabic",2,{type:"mcq",question:"رجل إمعة تعني الشخص الذي لا:",options:["رأي له","مال له","علم له","أهل له"],answer:"رأي له"});

addQuestion("arabic",2,{type:"mcq",question:"إعراب كلمة جميعاً في (حضر الطلاب جميعاً):",options:["توكيد","حال","فاعل","مفعول به"],answer:"حال"});

addQuestion("arabic",2,{type:"mcq",question:"كلمة اسع في جملة (اسع في الخير) فعل أمر مبني على:",options:["السكون","حذف حرف العلة","الفتح","حذف النون"],answer:"حذف حرف العلة"});

addQuestion("arabic",2,{type:"mcq",question:"العنصر الذي يتناول الأفكار الأساسية والفرعية في التعبير:",options:["المقدمة","العرض","الخاتمة","العنوان"],answer:"العرض"});

/* ========= الإنجليزية ========= */

/* ========================= */
/* صح وخطأ - English Test 1 */
/* ========================= */

addQuestion("english",0,{type:"tf",question:"Litmus paper is red in color when dipped in acid.",answer:"true"});

addQuestion("english",0,{type:"tf",question:"A valley is found between two hills.",answer:"true"});

addQuestion("english",0,{type:"tf",question:"If the weather is misty, we can see clearly.",answer:"false"});

addQuestion("english",0,{type:"tf",question:"A prefix is a group of letters added to the end of the stem.",answer:"false"});

addQuestion("english",0,{type:"tf",question:"Isaac Newton was the first person to explain the effect of gravity.",answer:"true"});

addQuestion("english",0,{type:"tf",question:"Watch carefully means observe.",answer:"true"});

addQuestion("english",0,{type:"tf",question:"AIDS is a disease that was easily cured.",answer:"false"});

addQuestion("english",0,{type:"tf",question:"A flow chart is a complicated way of showing information.",answer:"false"});

addQuestion("english",0,{type:"tf",question:"Annum means yearly.",answer:"true"});

addQuestion("english",0,{type:"tf",question:"Newton used a chemical formula to prove his theory.",answer:"false"});

addQuestion("english",0,{type:"tf",question:"Smallpox is a disease that is only found in cattle.",answer:"false"});

addQuestion("english",0,{type:"tf",question:"Gravity is the attraction between two objects.",answer:"true"});

addQuestion("english",0,{type:"tf",question:"Make out means see with difficulty.",answer:"true"});

addQuestion("english",0,{type:"tf",question:"Tears are needed to keep your eyes dry.",answer:"false"});

addQuestion("english",0,{type:"tf",question:"The sun revolves around the Earth.",answer:"false"});

addQuestion("english",0,{type:"tf",question:"A nightmare is often pleasant.",answer:"false"});

addQuestion("english",0,{type:"tf",question:"Vaccination is the use of a very weak form of a disease.",answer:"true"});

addQuestion("english",0,{type:"tf",question:"High sound leads to deafness.",answer:"true"});

addQuestion("english",0,{type:"tf",question:"Blanching means turning black.",answer:"false"});

addQuestion("english",0,{type:"tf",question:"Brine is a kind of sweetened water.",answer:"false"});
/* ========================= */
/* Multiple Choice - English */
/* ========================= */

addQuestion("english",0,{type:"mcq",question:"Isaac Newton explained that every object on Earth is attracted toward the:",options:["surface","space","center","moon"],answer:"center"});

addQuestion("english",0,{type:"mcq",question:"Drift means:",options:["move","stop","stay","rotate"],answer:"move"});

addQuestion("english",0,{type:"mcq",question:"He bought a ____ of glasses.",options:["some","any","pair","a"],answer:"pair"});

addQuestion("english",0,{type:"mcq",question:"Sana’a, ____ I live, is my best city.",options:["which","who","where","whom"],answer:"where"});

addQuestion("english",0,{type:"mcq",question:"She would like ____ more than three languages.",options:["speak","to speak","spoken","speaking"],answer:"to speak"});

addQuestion("english",0,{type:"mcq",question:"He is interested ____ using social media.",options:["in","at","on","to"],answer:"in"});

addQuestion("english",0,{type:"mcq",question:"While she was driving the car, the cat ____ the road.",options:["cross","crossed","crossing","crosses"],answer:"crossed"});

addQuestion("english",0,{type:"mcq",question:"The word friendly has:",options:["one suffix","two suffixes","no suffix","one prefix"],answer:"one suffix"});

addQuestion("english",0,{type:"mcq",question:"If there was no more rain, the life ____ difficult.",options:["will be","would be","is","was"],answer:"would be"});

addQuestion("english",0,{type:"mcq",question:"The force between you and Earth is ____ than the force between the moon and you.",options:["smaller","less","greater","weaker"],answer:"greater"});

addQuestion("english",0,{type:"mcq",question:"Every morning he ____ to work.",options:["drive","driving","drove","drives"],answer:"drives"});

addQuestion("english",0,{type:"mcq",question:"Newton used a mathematical ____ to prove his theory.",options:["formula","gravity","orbit","planet"],answer:"formula"});

addQuestion("english",0,{type:"mcq",question:"Gravity affects all the ____ in the solar system.",options:["people","planets","houses","cars"],answer:"planets"});

addQuestion("english",0,{type:"mcq",question:"My school is ____ crowded than your school.",options:["much","most","more","as"],answer:"more"});

addQuestion("english",0,{type:"mcq",question:"The pronoun it in the gravity text refers to:",options:["Earth","Gravity","Moon","Sun"],answer:"Gravity"});

addQuestion("english",0,{type:"mcq",question:"To pass the exam, you must study ____.",options:["good","well","bad","worst"],answer:"well"});

addQuestion("english",0,{type:"mcq",question:"The manager watched the students ____ in the yard.",options:["running","runs","ran","to run"],answer:"running"});

addQuestion("english",0,{type:"mcq",question:"He always ____ with his left hand.",options:["write","writing","writes","wrote"],answer:"writes"});

addQuestion("english",0,{type:"mcq",question:"She was in a hurry ____ she made an accident.",options:["but","so","because","however"],answer:"so"});

addQuestion("english",0,{type:"mcq",question:"Most of the Muslim people would love ____ Mecca every year.",options:["visit","to visit","visiting","visited"],answer:"to visit"});

addQuestion("english",0,{type:"mcq",question:"The colder the weather, the ____ clothes we wear.",options:["heavier","heavy","heaviest","heavily"],answer:"heavier"});

addQuestion("english",0,{type:"mcq",question:"I ____ speak Chinese, but I will learn it soon.",options:["must","cannot","may","could"],answer:"cannot"});

addQuestion("english",0,{type:"mcq",question:"The prefix that makes the word well negative is:",options:["dis","un","il","ir"],answer:"un"});

addQuestion("english",0,{type:"mcq",question:"They milk the cow early. The word milk is a:",options:["noun","verb","adjective","adverb"],answer:"verb"});

addQuestion("english",0,{type:"mcq",question:"I wish I ____ play chess.",options:["can","could","will","may"],answer:"could"});

addQuestion("english",0,{type:"mcq",question:"To change invent into a noun we add:",options:["able","ion","ness","ly"],answer:"ion"});

addQuestion("english",0,{type:"mcq",question:"My mother asked me ____ her.",options:["to help","helping","helps","helped"],answer:"to help"});

addQuestion("english",0,{type:"mcq",question:"Sami is ____ than Ali.",options:["short","shorter","shortest","tall"],answer:"shorter"});

addQuestion("english",0,{type:"mcq",question:"Luckily there was a taxi available. Luckily is a:",options:["noun","verb","adjective","adverb"],answer:"adverb"});

addQuestion("english",0,{type:"mcq",question:"I can do it ____.",options:["myself","yourself","ourselves","herself"],answer:"myself"}); 
/* ========================= */
/* True / False - English Test 2 */
/* ========================= */

addQuestion("english",1,{type:"tf",question:"Alkali means the ashes of plants.",answer:"true"});

addQuestion("english",1,{type:"tf",question:"A stream is bigger than a river.",answer:"false"});

addQuestion("english",1,{type:"tf",question:"We can see clearly in foggy weather.",answer:"false"});

addQuestion("english",1,{type:"tf",question:"Galileo Galilei was a natural philosopher, astronomer and mathematician.",answer:"true"});

addQuestion("english",1,{type:"tf",question:"Diligent means lazy.",answer:"false"});

addQuestion("english",1,{type:"tf",question:"In 1609 Galileo modeled his first telescope after telescopes produced in Europe.",answer:"true"});

addQuestion("english",1,{type:"tf",question:"A nightmare is often pleasant.",answer:"false"});

addQuestion("english",1,{type:"tf",question:"Vaccination means giving a disease to prevent another disease.",answer:"true"});

addQuestion("english",1,{type:"tf",question:"Smallpox is a disease that is only found in cattle.",answer:"false"});

addQuestion("english",1,{type:"tf",question:"The moon gets its light from the sun.",answer:"true"});

addQuestion("english",1,{type:"tf",question:"A prefix is a group of letters that comes at the end of the word.",answer:"false"});

addQuestion("english",1,{type:"tf",question:"The strength of the earthquake is measured on the Richter scale.",answer:"true"});

addQuestion("english",1,{type:"tf",question:"Things you use in cooking are called instruments.",answer:"false"});

addQuestion("english",1,{type:"tf",question:"Blanching means turning black.",answer:"false"});

addQuestion("english",1,{type:"tf",question:"Galileo's telescope could magnify objects twenty times.",answer:"true"});

addQuestion("english",1,{type:"tf",question:"Heavy objects fall faster than light objects according to Galileo.",answer:"false"});

addQuestion("english",1,{type:"tf",question:"A person who applies for a job is an applicant.",answer:"true"});

addQuestion("english",1,{type:"tf",question:"Brine is a kind of sweetened water.",answer:"false"});

addQuestion("english",1,{type:"tf",question:"Awful means very good.",answer:"false"});

addQuestion("english",1,{type:"tf",question:"The front part of a ship is called a mast.",answer:"false"});
/* ========================= */
/* Multiple Choice - English Test 2 */
/* ========================= */

addQuestion("english",1,{type:"mcq",question:"The text about Galileo is mainly talking about his:",options:["life","discoveries","occupations","interests"],answer:"life"});

addQuestion("english",1,{type:"mcq",question:"Galileo's law of falling objects was an important contribution in:",options:["physics","chemistry","astronomy","biology"],answer:"physics"});

addQuestion("english",1,{type:"mcq",question:"Galileo was born in:",options:["Italy","France","Britain","Germany"],answer:"Italy"});

addQuestion("english",1,{type:"mcq",question:"The number 1609 indicates Galileo's development of:",options:["telescope","falling objects law","gravity","object masses"],answer:"telescope"});

addQuestion("english",1,{type:"mcq",question:"Magnify means:",options:["enlarge","decrease","minimize","shrink"],answer:"enlarge"});

addQuestion("english",1,{type:"mcq",question:"Heavy and Light are:",options:["synonyms","antonyms","definitions","word formation"],answer:"antonyms"});

addQuestion("english",1,{type:"mcq",question:"Galileo studied at Pisa University:",options:["mathematics","physics","astronomy","medicine"],answer:"medicine"});

addQuestion("english",1,{type:"mcq",question:"Ask the officer for ____ application form.",options:["a","an","the","-"],answer:"an"});

addQuestion("english",1,{type:"mcq",question:"I watched the kids ____ along the street.",options:["walking","walked","walks","to walk"],answer:"walking"});

addQuestion("english",1,{type:"mcq",question:"He never ____ WhatsApp on Fridays.",options:["use","uses","using","used"],answer:"uses"});

addQuestion("english",1,{type:"mcq",question:"Ibb is the ____ beautiful city in Yemen.",options:["better","most","best","more"],answer:"best"});

addQuestion("english",1,{type:"mcq",question:"____ it was late, we didn't return home.",options:["however","but","although","so"],answer:"although"});

addQuestion("english",1,{type:"mcq",question:"To pass the exam you must study:",options:["well","good","bad","worst"],answer:"well"});

addQuestion("english",1,{type:"mcq",question:"He always ____ with his left hand.",options:["write","writes","wrote","writing"],answer:"writes"});

addQuestion("english",1,{type:"mcq",question:"The prefix that makes the word lead negative is:",options:["dis","il","ir","mis"],answer:"mis"});

addQuestion("english",1,{type:"mcq",question:"I dream to have a house. The word dream is a:",options:["adjective","verb","noun","adverb"],answer:"verb"});

addQuestion("english",1,{type:"mcq",question:"If you ____ hard you will pass the exam.",options:["study","studied","studying","to study"],answer:"study"});

addQuestion("english",1,{type:"mcq",question:"I wish I ____ play chess.",options:["can","could","may","shall"],answer:"could"});

addQuestion("english",1,{type:"mcq",question:"Luckily there was a taxi available. Luckily is a:",options:["noun","verb","adjective","adverb"],answer:"adverb"});

addQuestion("english",1,{type:"mcq",question:"I can do it ____.",options:["yourself","myself","ourselves","herself"],answer:"myself"});

addQuestion("english",1,{type:"mcq",question:"He talked to the man ____.",options:["himself","itself","myself","herself"],answer:"himself"});

addQuestion("english",1,{type:"mcq",question:"Sana'a is as ____ as Cairo.",options:["beautiful","more beautiful","beauty","most beautiful"],answer:"beautiful"});

addQuestion("english",1,{type:"mcq",question:"The phone rang while I ____.",options:["am sleeping","was sleeping","sleep","have slept"],answer:"was sleeping"});

addQuestion("english",1,{type:"mcq",question:"Which of these is a compound word?",options:["grateful","graduation","grapefruit","government"],answer:"grapefruit"});

addQuestion("english",1,{type:"mcq",question:"The suffix that makes the word home negative:",options:["less","ful","ly","ing"],answer:"less"});

addQuestion("english",1,{type:"mcq",question:"It in the Galileo text refers to:",options:["famous experiment","metal balls","telescope","gravity law"],answer:"telescope"});

addQuestion("english",1,{type:"mcq",question:"They built their house ____.",options:["themselves","ourselves","himself","myself"],answer:"themselves"});

addQuestion("english",1,{type:"mcq",question:"If I get a lot of money I ____ a mosque.",options:["builds","build","will build","would build"],answer:"will build"});

addQuestion("english",1,{type:"mcq",question:"Ahmed broke the vase ____.",options:["himself","itself","herself","themselves"],answer:"himself"});

addQuestion("english",1,{type:"mcq",question:"Nora is as ____ as her friend.",options:["taller","tallest","tall","younger"],answer:"tall"});
/* ========================= */
/* True / False - English Test 3 */
/* ========================= */

addQuestion("english",2,{type:"tf",question:"Alkali turns red litmus paper blue.",answer:"true"});

addQuestion("english",2,{type:"tf",question:"Matter is used to describe what things are made of.",answer:"true"});

addQuestion("english",2,{type:"tf",question:"Wolf and jackal are members of the cat family.",answer:"false"});

addQuestion("english",2,{type:"tf",question:"Round, square and triangle are all instruments.",answer:"false"});

addQuestion("english",2,{type:"tf",question:"Chickens eat with their beaks.",answer:"true"});

addQuestion("english",2,{type:"tf",question:"Turn over the soil means plough.",answer:"true"});

addQuestion("english",2,{type:"tf",question:"The quantum theory is about sound.",answer:"false"});

addQuestion("english",2,{type:"tf",question:"Light is a form of energy.",answer:"true"});

addQuestion("english",2,{type:"tf",question:"Earthquakes and volcanoes are natural disasters.",answer:"true"});

addQuestion("english",2,{type:"tf",question:"The synonym of commence is finish.",answer:"false"});

addQuestion("english",2,{type:"tf",question:"Slightly damage means almost total damage.",answer:"false"});

addQuestion("english",2,{type:"tf",question:"Dr. Edward Jenner invented the vaccine.",answer:"true"});

addQuestion("english",2,{type:"tf",question:"The world around us means experience.",answer:"true"});

addQuestion("english",2,{type:"tf",question:"The particles of food in the freezer get farther apart.",answer:"false"});

addQuestion("english",2,{type:"tf",question:"A person who applies for a job is an applicant.",answer:"true"});

addQuestion("english",2,{type:"tf",question:"A suffix is a group of letters added to the beginning of the stem.",answer:"false"});

addQuestion("english",2,{type:"tf",question:"Things you use in cooking are ingredients.",answer:"true"});

addQuestion("english",2,{type:"tf",question:"Frozen peas are processed in factories.",answer:"true"});

addQuestion("english",2,{type:"tf",question:"The moon disappears in a solar eclipse.",answer:"false"});

addQuestion("english",2,{type:"tf",question:"A group of connected words is called a word set.",answer:"true"});

/* ========================= */
/* Multiple Choice - English Test 3 */
/* ========================= */

addQuestion("english",2,{type:"mcq",question:"The text is mainly talking about:",options:["traveling","airplanes","transport","airport"],answer:"traveling"});

addQuestion("english",2,{type:"mcq",question:"For many people long plane flights are:",options:["pleasant","unpleasant","interesting","joyful"],answer:"unpleasant"});

addQuestion("english",2,{type:"mcq",question:"Long flights may cause clots in your:",options:["arms","legs","head","heart"],answer:"legs"});

addQuestion("english",2,{type:"mcq",question:"Blood clots happen when blood:",options:["flows well","flows badly","breaks up","bleeds"],answer:"flows badly"});

addQuestion("english",2,{type:"mcq",question:"Getting a leg blood clot is:",options:["good","painful","safe","harmless"],answer:"painful"});

addQuestion("english",2,{type:"mcq",question:"Airline companies show videos explaining how to:",options:["run fast","fly the plane","sit still","do simple movements"],answer:"do simple movements"});

addQuestion("english",2,{type:"mcq",question:"Blood doesn't flow well when you sit for:",options:["few","two","many","less"],answer:"many"});

addQuestion("english",2,{type:"mcq",question:"Passengers means people on the:",options:["plane","train","bus","ship"],answer:"plane"});

addQuestion("english",2,{type:"mcq",question:"The antonym of the word past is:",options:["present","future","new","old"],answer:"future"});

addQuestion("english",2,{type:"mcq",question:"They in the text refers to:",options:["movements","legs and arms","companies","flights"],answer:"legs and arms"});

addQuestion("english",2,{type:"mcq",question:"I have been waiting for you for ____ hour.",options:["a","an","some","any"],answer:"an"});

addQuestion("english",2,{type:"mcq",question:"Ibb is the ____ beautiful city in Yemen.",options:["better","most","best","more"],answer:"most"});

addQuestion("english",2,{type:"mcq",question:"____ he worked hard he didn't pass the exam.",options:["however","although","but","whereas"],answer:"although"});

addQuestion("english",2,{type:"mcq",question:"She drives ____ to reach early.",options:["fast","fastest","slow","fastness"],answer:"fast"});

addQuestion("english",2,{type:"mcq",question:"We saw the police ____ the thief.",options:["to catch","catches","catching","caught"],answer:"catching"});

addQuestion("english",2,{type:"mcq",question:"The fire was ____ by firefighters.",options:["control","controls","controlled","controlling"],answer:"controlled"});

addQuestion("english",2,{type:"mcq",question:"They are ____ prepare the party food.",options:["go","going to","went","gone"],answer:"going to"});

addQuestion("english",2,{type:"mcq",question:"Where is the money ____ I gave you?",options:["whose","which","when","whom"],answer:"which"});

addQuestion("english",2,{type:"mcq",question:"He didn't go to the market ____ he was very sick.",options:["so","because","and","but"],answer:"because"});

addQuestion("english",2,{type:"mcq",question:"I look forward to ____ from you soon.",options:["hear","hears","hearing","heard"],answer:"hearing"});

addQuestion("english",2,{type:"mcq",question:"Socotra is an island ____ the south coast.",options:["of","for","with","off"],answer:"off"});

addQuestion("english",2,{type:"mcq",question:"The deeper the water the ____ the pressure.",options:["great","greater","greatest","greatness"],answer:"greater"});

addQuestion("english",2,{type:"mcq",question:"While I was doing my work the bell ____.",options:["ring","rings","rang","rung"],answer:"rang"});

addQuestion("english",2,{type:"mcq",question:"I don't eat fast food. Fast is a:",options:["adjective","noun","verb","adverb"],answer:"adjective"});

addQuestion("english",2,{type:"mcq",question:"Prepare + tion becomes a:",options:["adjective","verb","noun","adverb"],answer:"noun"});

addQuestion("english",2,{type:"mcq",question:"The compound word is:",options:["toothpaste","paste","tooth","circus"],answer:"toothpaste"});

addQuestion("english",2,{type:"mcq",question:"____ your brother write for you.",options:["ask","have","get","tell"],answer:"get"});

addQuestion("english",2,{type:"mcq",question:"I wish I ____ said these words.",options:["have","will","hadn't","can't"],answer:"hadn't"});

addQuestion("english",2,{type:"mcq",question:"If you see an accident please ____ the police.",options:["phones","phone","phoned","phoning"],answer:"phone"});

addQuestion("english",2,{type:"mcq",question:"He did all the work ____.",options:["himself","herself","myself","themselves"],answer:"himself"});




/* ========= الكيمياء ========= */

addQuestion("chemistry", 0, { type: "tf", question: "يعمل الخبث على حماية الحديد المذاب من التأكسد داخل الفرن اللافح.", answer: "true" });
addQuestion("chemistry", 0, { type: "tf", question: "يتفاعل الحديد مع حمض الهيدروكلوريك المخفف ويتكون كلوريد الحديد III وغاز الهيدروجين.", answer: "false" });
addQuestion("chemistry", 0, { type: "tf", question: "تختلف خامات الحديد عن بعضها في التركيب الكيميائي ونسبة الشوائب.", answer: "true" });
addQuestion("chemistry", 0, { type: "tf", question: "يعتبر الحديد (Fe) من العوامل المختزلة القوية.", answer: "true" });
addQuestion("chemistry", 0, { type: "tf", question: "في التفاعلات الماصة للحرارة يكون المحتوى الحراري للمواد المتفاعلة أكبر من الناتجة.", answer: "false" });
addQuestion("chemistry", 0, { type: "tf", question: "إذا كانت قيمة ΔH سالبة فإن التفاعل يكون طارداً للحرارة.", answer: "true" });
addQuestion("chemistry", 0, { type: "tf", question: "لزيادة ذوبانية مادة ماصة للحرارة نقوم بتبريد المحلول.", answer: "false" });
addQuestion("chemistry", 0, { type: "tf", question: "المحتوى الحراري القياسي لأي عنصر في حالته المستقرة يساوي صفراً.", answer: "true" });
addQuestion("chemistry", 0, { type: "tf", question: "عند تنقية النحاس كهربائياً يتم توصيل النحاس غير النقي بالمصعد.", answer: "true" });
addQuestion("chemistry", 0, { type: "tf", question: "الخلايا الجلفانية تحول الطاقة الكيميائية إلى طاقة كهربائية.", answer: "true" });
addQuestion("chemistry", 0, { type: "tf", question: "القنطرة الملحية تسمح بمرور الأيونات دون اختلاط المحلولين.", answer: "true" });
addQuestion("chemistry", 0, { type: "tf", question: "طاقة الترابط النووي لكل نيوكليون هي المقياس الحقيقي لاستقرار النواة.", answer: "true" });
addQuestion("chemistry", 0, { type: "tf", question: "التفاعلات النووية تتضمن تغييرات في ترتيب الإلكترونات الخارجية.", answer: "false" });
addQuestion("chemistry", 0, { type: "tf", question: "في عملية الأسر الإلكتروني يتحول البروتون إلى نيوترون.", answer: "true" });
addQuestion("chemistry", 0, { type: "tf", question: "الأمينات قواعد عضوية أضعف من الأمونيا.", answer: "false" });
addQuestion("chemistry", 0, { type: "tf", question: "عند تسخين الأميدات مع P2O5 تنتج النيتريلات.", answer: "true" });
addQuestion("chemistry", 0, { type: "tf", question: "الكربوهيدرات مركبات ألدهيدية أو كيتونية عديدة الهيدروكسيل.", answer: "true" });
addQuestion("chemistry", 0, { type: "tf", question: "الحديد النقي كيميائياً يكون ليناً نسبياً.", answer: "true" });
addQuestion("chemistry", 0, { type: "tf", question: "ذوبان هيدروكسيد الصوديوم في الماء تغير فيزيائي طارد للحرارة.", answer: "true" });
addQuestion("chemistry", 0, { type: "tf", question: "تبلغ نسبة الكربون في الحديد الصلب حوالي 5% إلى 10%.", answer: "false" });

addQuestion("chemistry",0,{type:"mcq",question:"أكسيد الحديد المغناطيسي Fe3O4 يسمى:",options:["الهيماتيت","الماجنيتايت","الليمونايت","السيدريت"],answer:"الماجنيتايت"});
addQuestion("chemistry",0,{type:"mcq",question:"عند تفاعل الحديد مع الكلور بالتسخين يتكون:",options:["كلوريد الحديد II","كلوريد الحديد III","خليط منهما","هيدروكسيد الحديد"],answer:"كلوريد الحديد III"});
addQuestion("chemistry",0,{type:"mcq",question:"أي من العناصر التالية ينتمي للسلسلة الانتقالية الأولى؟",options:["الفضة","الذهب","المنجنيز","الكادميوم"],answer:"المنجنيز"});
addQuestion("chemistry",0,{type:"mcq",question:"تتراوح نسبة الحديد في خام الهيماتيت بين:",options:["20-30%","30-45%","50-60%","70-80%"],answer:"50-60%"});
addQuestion("chemistry",0,{type:"mcq",question:"ΔH يساوي حرارة التفاعل عند:",options:["حجم ثابت","ضغط ثابت","درجة حرارة ثابتة","تركيز ثابت"],answer:"ضغط ثابت"});
addQuestion("chemistry",0,{type:"mcq",question:"حرارة التعادل بين حمض قوي وقاعدة قوية تساوي:",options:["-57.3 كيلو جول","+57.3 كيلو جول","-13.6 كيلو جول","صفر"],answer:"-57.3 كيلو جول"});
addQuestion("chemistry",0,{type:"mcq",question:"كمية الحرارة اللازمة لرفع درجة حرارة جرام واحد درجة واحدة تسمى:",options:["السعة الحرارية","الحرارة النوعية","المحتوى الحراري","طاقة التنشيط"],answer:"الحرارة النوعية"});
addQuestion("chemistry",0,{type:"mcq",question:"في التفاعل الطارد للحرارة تكون طاقة النواتج:",options:["أقل من المتفاعلات","أكبر من المتفاعلات","تساوي المتفاعلات"],answer:"أقل من المتفاعلات"});
addQuestion("chemistry",0,{type:"mcq",question:"الجهاز المستخدم لقياس حرارة الاحتراق:",options:["الفولتميتر","مسعر القنبلة","المانوميتر","الهيدروميتر"],answer:"مسعر القنبلة"});
addQuestion("chemistry",0,{type:"mcq",question:"في خلية دانيال تحدث الأكسدة عند:",options:["النحاس","الخارصين","القنطرة الملحية","المحلول"],answer:"الخارصين"});
addQuestion("chemistry",0,{type:"mcq",question:"القوة الدافعة الكهربية لخلية الزئبق:",options:["1.23","1.35","1.5","2"],answer:"1.35"});
addQuestion("chemistry",0,{type:"mcq",question:"إلكتروليت بطارية السيارة:",options:["حمض الكبريتيك","هيدروكسيد البوتاسيوم","كلوريد الأمونيوم","حمض النتريك"],answer:"حمض الكبريتيك"});
addQuestion("chemistry",0,{type:"mcq",question:"عند طلاء الحديد بالفضة يوصل بقطب:",options:["المصعد","المهبط","الموجب","الغمد"],answer:"المهبط"});
addQuestion("chemistry",0,{type:"mcq",question:"الغاز المستخدم في خلية الوقود:",options:["النيتروجين","الهيدروجين","الأرجون","الميثان"],answer:"الهيدروجين"});
addQuestion("chemistry",0,{type:"mcq",question:"الانبعاث الذي يزيد العدد الذري بمقدار 1:",options:["ألفا","بيتا","جاما","بوزيترون"],answer:"بيتا"});
addQuestion("chemistry",0,{type:"mcq",question:"جسيمات ألفا هي نواة:",options:["الهيدروجين","الهيليوم","الليثيوم","البريليوم"],answer:"الهيليوم"});
addQuestion("chemistry",0,{type:"mcq",question:"الزمن اللازم لتحلل نصف الكمية يسمى:",options:["زمن النشاط","عمر النصف","زمن الاضمحلال","الثبات الإشعاعي"],answer:"عمر النصف"});
addQuestion("chemistry",0,{type:"mcq",question:"المادة المستخدمة كمهدئ للنيوترونات:",options:["الكادميوم","الجرافيت","اليورانيوم","الرصاص"],answer:"الجرافيت"});
addQuestion("chemistry",0,{type:"mcq",question:"الصيغة العامة للأمينات الأولية:",options:["R-OH","R-NH2","R-CHO","R-COOH"],answer:"R-NH2"});
addQuestion("chemistry",0,{type:"mcq",question:"تفاعل تكوين البروتين يسمى:",options:["التحلل","التكاثف","الإضافة","الاستبدال"],answer:"التكاثف"});
addQuestion("chemistry",0,{type:"mcq",question:"سكر القصب يعتبر:",options:["أحادي","ثنائي","عديدي","غير مختزل"],answer:"ثنائي"});
addQuestion("chemistry",0,{type:"mcq",question:"كاشف الجلوكوز:",options:["بندكت","نترات الفضة","تباع الشمس","الفينول فثالين"],answer:"بندكت"});
addQuestion("chemistry",0,{type:"mcq",question:"الوحدة البنائية للبروتين:",options:["الأحماض الدهنية","الأحماض الأمينية","الجلوكوز","النيوكليوتيدات"],answer:"الأحماض الأمينية"});
addQuestion("chemistry",0,{type:"mcq",question:"الزيوت ناتجة من تفاعل الأحماض الدهنية مع:",options:["الميثانول","الجلسرول","الإيثانول","الفينول"],answer:"الجلسرول"});
addQuestion("chemistry",0,{type:"mcq",question:"H2 + Cl2 → 2HCl + 185KJ تفاعل:",options:["ماص","طارد","متعادل","لا حراري"],answer:"طارد"});
addQuestion("chemistry",0,{type:"mcq",question:"القطب السالب في الخلية الجافة:",options:["الكربون","الخارصين","الرصاص","النحاس"],answer:"الخارصين"});
addQuestion("chemistry",0,{type:"mcq",question:"عدد نيوترونات U238:",options:["92","238","146","330"],answer:"146"});
addQuestion("chemistry",0,{type:"mcq",question:"السلسلة الانتقالية التي تنتهي بـ5d:",options:["الأولى","الثانية","الثالثة","الرابعة"],answer:"الثالثة"});
addQuestion("chemistry",0,{type:"mcq",question:"مركب يتميز برائحة السمك:",options:["الكحول","الأمين","الحمض","الإستر"],answer:"الأمين"});
addQuestion("chemistry",0,{type:"mcq",question:"النشا والسليلوز أمثلة على كربوهيدرات:",options:["بسيطة","ثنائية","عديدة","سكرية"],answer:"عديدة"});



/* ========================= */
/* صح وخطأ (20 سؤال) */
/* ========================= */

addQuestion("chemistry",1,{type:"tf",question:"التفاعل في وعاء معزول حرارياً يعد عملية أديباتية",answer:"true"});

addQuestion("chemistry",1,{type:"tf",question:"يتأثر التفاعل النووي بالضغط والحرارة",answer:"true"});

addQuestion("chemistry",1,{type:"tf",question:"تُشتق الأمينات من الأمونيا",answer:"true"});

addQuestion("chemistry",1,{type:"tf",question:"السالبية الكهربية تحدد قوة العوامل المؤكسدة والمختزلة",answer:"true"});

addQuestion("chemistry",1,{type:"tf",question:"يودات البوتاسيوم من العوامل المختزلة",answer:"false"});

addQuestion("chemistry",1,{type:"tf",question:"الجزء المتبقي خارج حدود النظام يسمى وسط محيط",answer:"true"});

addQuestion("chemistry",1,{type:"tf",question:"يحدث اختزال عند المهبط في الخلايا الجلفانية",answer:"true"});

addQuestion("chemistry",1,{type:"tf",question:"سكر الرامنوز من الكربوهيدرات ويختلف عنها في الصيغة العامة",answer:"true"});

addQuestion("chemistry",1,{type:"tf",question:"يزداد جهد اختزال الأيونات السالبة بزيادة تركيز المحلول",answer:"false"});

addQuestion("chemistry",1,{type:"tf",question:"الحرارة النوعية لمعظم المواد أكبر من الحرارة النوعية للماء",answer:"false"});

addQuestion("chemistry",1,{type:"tf",question:"مجموعة عائلة الحديد تتكون من Fe و Co و Ni",answer:"true"});

addQuestion("chemistry",1,{type:"tf",question:"تتناسب كتل المواد أثناء التحليل الكهربي طردياً مع كمية الكهرباء المارة في المحلول",answer:"true"});

addQuestion("chemistry",1,{type:"tf",question:"الأمينات قواعد عضوية ضعيفة",answer:"true"});

addQuestion("chemistry",1,{type:"tf",question:"الطاقة الناتجة من حرق البروتين تساوي الطاقة الناتجة من حرق الدهون",answer:"false"});

addQuestion("chemistry",1,{type:"tf",question:"الاندماج النووي أخطر من الانشطار النووي",answer:"true"});

addQuestion("chemistry",1,{type:"tf",question:"التوزيع الإلكتروني للمنغنيز Mn هو [Ar]4s1 3d5",answer:"false"});

addQuestion("chemistry",1,{type:"tf",question:"تسمى عناصر المجموعة الانتقالية IIB بعناصر العملة",answer:"false"});

addQuestion("chemistry",1,{type:"tf",question:"عدد النيوترونات في Al26 يساوي 13",answer:"true"});

addQuestion("chemistry",1,{type:"tf",question:"تنعكس إشارة ΔH عند عكس التفاعل",answer:"true"});

addQuestion("chemistry",1,{type:"tf",question:"يتكون راسب أزرق قاتم عند إضافة محلول حديدو سيانيد البوتاسيوم إلى Fe3+",answer:"true"});

/* ========================= */
/* اختيار من متعدد */
/* ========================= */

addQuestion("chemistry",1,{type:"mcq",question:"السلسلة الانتقالية الرئيسية الأولى 3d تتبع أي دورة في الجدول الدوري؟",options:["الأولى","الثانية","الثالثة","الرابعة"],answer:"الرابعة"});

addQuestion("chemistry",1,{type:"mcq",question:"سكر الفواكه هو:",options:["السكروز","المالتوز","اللاكتوز","الفركتوز"],answer:"الفركتوز"});

addQuestion("chemistry",1,{type:"mcq",question:"جهد اختزال النحاس +0.34 فولت وجهد أكسدة الحديد +0.45 فولت، جهد الخلية يساوي:",options:["0.11","0.34","0.79","0.45"],answer:"0.79"});

addQuestion("chemistry",1,{type:"mcq",question:"مادة ذوبانها ماص للحرارة:",options:["هيدروكسيد الصوديوم","حمض الكبريتيك","هيدروكسيد البوتاسيوم","نترات الأمونيوم"],answer:"نترات الأمونيوم"});

addQuestion("chemistry",1,{type:"mcq",question:"ثاني أكسيد الرصاص في بطارية السيارات يمثل:",options:["المصعد","المهبط","مصعد الخلية القاعدية","مهبط الخلية القاعدية"],answer:"المهبط"});

addQuestion("chemistry",1,{type:"mcq",question:"عدد الحموض الأمينية التي تكوّن البروتينات:",options:["6","8","12","20"],answer:"20"});

addQuestion("chemistry",1,{type:"mcq",question:"فيتامين يذوب في الماء:",options:["A","C","E","D"],answer:"C"});

addQuestion("chemistry",1,{type:"mcq",question:"المادة التي تزود الفرن العالي بوسط قاعدي:",options:["الكربون","ثاني أكسيد الكربون","كربونات الكالسيوم","أول أكسيد الكربون"],answer:"كربونات الكالسيوم"});

addQuestion("chemistry",1,{type:"mcq",question:"من تطبيقات الخلايا الجلفانية:",options:["إنتاج مياه الشرب","تنقية المعادن","تحضير الصوديوم","طلاء المعادن"],answer:"إنتاج مياه الشرب"});

addQuestion("chemistry",1,{type:"mcq",question:"طاقة الترابط النووي لنواة 28.3 MeV ومتوسطها 7.075 MeV، عدد النيوكليونات:",options:["2","4","7","8"],answer:"4"});

addQuestion("chemistry",1,{type:"mcq",question:"كشف هوفمان للأميدات غير المستبدلة ينتج:",options:["حمض كربوكسيلي","أمين أولي","حمض أميني","نيتريل"],answer:"أمين أولي"});

addQuestion("chemistry",1,{type:"mcq",question:"الرمز ΔHvap يمثل حرارة:",options:["التكوين","الاحتراق","الانصهار","التبخير"],answer:"التبخير"});

addQuestion("chemistry",1,{type:"mcq",question:"أحد الأنوية التالية نشط إشعاعياً:",options:["Ne20","O16","C14","Al27"],answer:"C14"});

addQuestion("chemistry",1,{type:"mcq",question:"تتفاعل الحموض الأمينية مع NaOBr لتكوين:",options:["حمض كربوكسيلي","أمين أولي","نيتريل","ملح عضوي"],answer:"أمين أولي"});

addQuestion("chemistry",1,{type:"mcq",question:"نظيران X63 و X65 بنسبة 65% و35%، الكتلة الذرية:",options:["60.7","62.7","63.7","64.3"],answer:"63.7"});

addQuestion("chemistry",1,{type:"mcq",question:"عدد تأكسد الرصاص في PbO2:",options:["-2","+2","-4","+4"],answer:"+4"});

addQuestion("chemistry",1,{type:"mcq",question:"الخام الرئيسي لاستخلاص الحديد:",options:["Fe2O3","Fe3O4","FeO","Fe2O3·nH2O"],answer:"Fe2O3"});

addQuestion("chemistry",1,{type:"mcq",question:"المركب C6H5CONH2 يسمى:",options:["أنيلين","بنزاميد","بيريدين","بيبيريدين"],answer:"بنزاميد"});

addQuestion("chemistry",1,{type:"mcq",question:"المركب الأقل استقراراً هو صاحب حرارة تكوين:",options:["-238.6","+90.37","-286","+33.9"],answer:"+90.37"});

addQuestion("chemistry",1,{type:"mcq",question:"لحساب جهد اختزال Ni2+/Ni نربطه مع:",options:["النحاس","الهيدروجين","الخارصين","الليثيوم"],answer:"الهيدروجين"});

addQuestion("chemistry",1,{type:"mcq",question:"الصيغة الكيميائية لليمونيت:",options:["Fe3O4","Fe2O3","Fe2O3·nH2O","FeS"],answer:"Fe2O3·nH2O"});

addQuestion("chemistry",1,{type:"mcq",question:"تحول O15 إلى N15 يصاحبه فقدان:",options:["نيوترون","بيتا","بوزيترون","بروتون"],answer:"بوزيترون"});

addQuestion("chemistry",1,{type:"mcq",question:"كتلة الفضة المترسبة بمرور 1.5 فاراداي:",options:["108","162","72","126"],answer:"162"});

addQuestion("chemistry",1,{type:"mcq",question:"المركب الذي يحدث فيه انتقال كامل للإلكترونات:",options:["CO2","SO3","NO","MgCl2"],answer:"MgCl2"});

addQuestion("chemistry",1,{type:"mcq",question:"قطعة معدنية كتلتها 100g وحرارتها النوعية 0.387 وزادت الحرارة 20°C، كمية الحرارة:",options:["77.4","774","7.74","387"],answer:"774"});

addQuestion("chemistry",1,{type:"mcq",question:"حمض يجعل الحديد خاملاً:",options:["HCl مخفف","HCl مركز","H2SO4 مخفف","HNO3 مركز"],answer:"HNO3 مركز"});

addQuestion("chemistry",1,{type:"mcq",question:"حرارة التفاعل 2S + 3O2 → 2SO3 إذا كانت ΔHf=-396:",options:["-792","+792","-396","+396"],answer:"-792"});

addQuestion("chemistry",1,{type:"mcq",question:"في خلية التحليل الكهربي القطب المتصل بالموجب يسمى:",options:["المصعد","المهبط","مصدر التيار","أسلاك التوصيل"],answer:"المصعد"});

/* ========================= */
/* صح وخطأ (20 سؤال) */
/* ========================= */

addQuestion("chemistry",2,{type:"tf",question:"التفاعل في وعاء معزول حرارياً يعد عملية أديباتية",answer:"true"});
addQuestion("chemistry",2,{type:"tf",question:"يصاحب التفاعلات الكيميائية انطلاق أشعة",answer:"false"});
addQuestion("chemistry",2,{type:"tf",question:"التأكسد عملية كيميائية يحدث فيها اكتساب الإلكترونات",answer:"false"});
addQuestion("chemistry",2,{type:"tf",question:"برمنجنات البوتاسيوم من العوامل المؤكسدة",answer:"true"});
addQuestion("chemistry",2,{type:"tf",question:"يكتمل المستوى الفرعي 4f في الدورة السابعة",answer:"false"});
addQuestion("chemistry",2,{type:"tf",question:"يكتسب الرصاص حرارة أسرع من الماء عند تسخينه",answer:"false"});
addQuestion("chemistry",2,{type:"tf",question:"يمكن إعادة شحن خلية خزن الطاقة",answer:"true"});
addQuestion("chemistry",2,{type:"tf",question:"الدهون تحتوي على حموض دهنية مشبعة فقط",answer:"false"});
addQuestion("chemistry",2,{type:"tf",question:"يحدث تفاعل أكسدة واختزال تلقائي في الخلية الجلفانية",answer:"true"});
addQuestion("chemistry",2,{type:"tf",question:"مجموعة عائلة الحديد تتكون من Fe و Co و Ni",answer:"true"});
addQuestion("chemistry",2,{type:"tf",question:"يتوسط السلسلة الكهروكيميائية الهيدروجين",answer:"false"});
addQuestion("chemistry",2,{type:"tf",question:"مجموعة الكربوكسيل في الحموض الأمينية مسؤولة عن الخواص القاعدية",answer:"false"});
addQuestion("chemistry",2,{type:"tf",question:"حرارة التفاعل مقدار ثابت سواء تم التفاعل في خطوة أو عدة خطوات",answer:"true"});
addQuestion("chemistry",2,{type:"tf",question:"فيتامين D من الفيتامينات الذائبة في الماء",answer:"false"});
addQuestion("chemistry",2,{type:"tf",question:"يستخدم مطياف الكتلة في إيجاد كتل نظائر العنصر",answer:"true"});
addQuestion("chemistry",2,{type:"tf",question:"الصيغة العامة للأميدات هي R-CONH2",answer:"true"});
addQuestion("chemistry",2,{type:"tf",question:"التوزيع الإلكتروني للحديد Fe هو [Ar]3d6 4s1",answer:"false"});
addQuestion("chemistry",2,{type:"tf",question:"عدد إلكترونات Cl- يساوي 18",answer:"true"});
addQuestion("chemistry",2,{type:"tf",question:"إشارة ΔH موجبة في التفاعلات الطاردة للحرارة",answer:"false"});
addQuestion("chemistry",2,{type:"tf",question:"يتكون راسب أخضر عند إضافة NaOH إلى محلول Fe2+",answer:"true"});


/* ========================= */
/* اختيار من متعدد (30 سؤال) */
/* ========================= */

addQuestion("chemistry",2,{type:"mcq",question:"السلسلة الانتقالية الرئيسية الثانية تنتهي بعنصر:",options:["الخارصين","الكادميوم","الزئبق","اللانثانوم"],answer:"الكادميوم"});

addQuestion("chemistry",2,{type:"mcq",question:"تفاعل الأمين الثانوي مع الحموض العضوية يعطي:",options:["أميد غير مستبدل","أميد أحادي الاستبدال","أميد ثنائي الاستبدال","حمض أميني"],answer:"أميد أحادي الاستبدال"});

addQuestion("chemistry",2,{type:"mcq",question:"يختلف الجلوكوز عن الفركتوز في:",options:["عدد ذرات الهيدروجين","المجموعة الوظيفية","عدد ذرات الكربون","عدد ذرات الأكسجين"],answer:"المجموعة الوظيفية"});

addQuestion("chemistry",2,{type:"mcq",question:"توجد فتحة أعلى الفرن العالي لدخول:",options:["هواء ساخن مضغوط","الحجر الجيري","الشحنة","الخبث"],answer:"الشحنة"});

addQuestion("chemistry",2,{type:"mcq",question:"إذا كان جهد اختزال X=2.87 و Y=0.13 فإن جهد الخلية:",options:["3","2.51","2.74","2.64"],answer:"2.74"});

addQuestion("chemistry",2,{type:"mcq",question:"تغير حراري كيميائي حرارة:",options:["التبخر","التكثف","الذوبان","التعادل"],answer:"التبخر"});

addQuestion("chemistry",2,{type:"mcq",question:"لإنتاج ماء الشرب في السفن الفضائية تستخدم:",options:["خلايا خزن الطاقة","الخلية القاعدية","خلية الوقود","خلية الزئبق"],answer:"خلية الوقود"});

addQuestion("chemistry",2,{type:"mcq",question:"الليبيدات عبارة عن:",options:["إسترات","أحماض كربوكسيلية","كحولات","إيثرات"],answer:"إسترات"});

addQuestion("chemistry",2,{type:"mcq",question:"نسبة سكر اللبن في حليب الأبقار:",options:["3%","4%","5%","8%"],answer:"5%"});

addQuestion("chemistry",2,{type:"mcq",question:"نسبة الحديد كبيرة في خام:",options:["الماجنيتيت","الهيماتيت","الليمونيت","السيدريت"],answer:"الماجنيتيت"});

addQuestion("chemistry",2,{type:"mcq",question:"كمية المواد المتكونة عند الأقطاب تتناسب مع:",options:["أعدادها الذرية","أوزانها الذرية","كتلها المكافئة","كتلها الذرية"],answer:"أوزانها الذرية"});

addQuestion("chemistry",2,{type:"mcq",question:"إذا كانت طاقة الترابط النووي 38.99 ومتوسطها 5.57 فإن عدد النيوكليونات:",options:["40","39","38","7"],answer:"38"});

addQuestion("chemistry",2,{type:"mcq",question:"ينتزع الماء من الأميدات لتحضير:",options:["حموض أمينية","نتريلات","أمينات","أميدات مستبدلة"],answer:"نتريلات"});

addQuestion("chemistry",2,{type:"mcq",question:"الرمز ΔHf يمثل حرارة:",options:["الاحتراق","التكوين","التبخر","التعادل"],answer:"التكوين"});

addQuestion("chemistry",2,{type:"mcq",question:"أقوى عامل مؤكسد هو صاحب جهد اختزال:",options:["-3.04","+2.87","+1.36","-0.76"],answer:"+2.87"});

addQuestion("chemistry",2,{type:"mcq",question:"النواة المشعة من التالي:",options:["O16","C12","N14","C14"],answer:"C14"});

addQuestion("chemistry",2,{type:"mcq",question:"عدد تأكسد الكبريت في SO3:",options:["-2","-6","+6","+3"],answer:"+6"});

addQuestion("chemistry",2,{type:"mcq",question:"جسيمات نووية ذات قدرة تأيين عالية:",options:["β","γ","α","β+"],answer:"α"});

addQuestion("chemistry",2,{type:"mcq",question:"المركب C6H5NH2 يسمى:",options:["أمينو هكسان","أنيلين","بنزاميد","بيريدين"],answer:"أنيلين"});

addQuestion("chemistry",2,{type:"mcq",question:"المصعد في الخلية القاعدية:",options:["HgO","MnO2","PbO2","Zn-KOH"],answer:"MnO2"});

addQuestion("chemistry",2,{type:"mcq",question:"المركب الأقل ثباتاً حرارياً:",options:["-1207","+33.9","-393.5","-426.8"],answer:"+33.9"});

addQuestion("chemistry",2,{type:"mcq",question:"من مكونات الخبث:",options:["FeO","CaSiO3","Fe3O4","Fe2O3"],answer:"CaSiO3"});

addQuestion("chemistry",2,{type:"mcq",question:"قذف نواة الألومنيوم بنيترون بطيء ينتج:",options:["Al28","Na24","P30","Mg26"],answer:"Al28"});

addQuestion("chemistry",2,{type:"mcq",question:"لترسيب 24 جم من Mg2+ يلزم:",options:["1","2","3","4"],answer:"2"});

addQuestion("chemistry",2,{type:"mcq",question:"يحدث انتقال كامل للإلكترونات في:",options:["CO2","SO3","NO","NaCl"],answer:"NaCl"});

addQuestion("chemistry",2,{type:"mcq",question:"يتكون ملح الحديد الثلاثي عند تفاعل الحديد مع:",options:["Cl2","O2","N2","H2"],answer:"Cl2"});

addQuestion("chemistry",2,{type:"mcq",question:"حرارة تكوين الإيثانول:",options:["-287","+287","-120","120"],answer:"-287"});

addQuestion("chemistry",2,{type:"mcq",question:"في خلية التحليل الكهربي القطب المتصل بالموجب يسمى:",options:["المصعد","المهبط","المحلول","السلك"],answer:"المصعد"});
/* ========= الأحياء ========= */

addQuestion("biology",0,{type:"tf",question:"السيال العصبي هو موجة من إزالة الاستقطاب تسري في محور الخلية العصبية بعد تنبيهها",answer:"true"});
addQuestion("biology",0,{type:"tf",question:"الناقل العصبي أستيل كولين يتحطم إلى كولين وحمض الخليك بواسطة إنزيم خاص",answer:"true"});
addQuestion("biology",0,{type:"tf",question:"عند لمس جسم ساخن فإن المستقبلات الحسية التي تتأثر هي حويصلات ميسنر",answer:"false"});
addQuestion("biology",0,{type:"tf",question:"عندما يتأثر جزء من الخلية بمؤثر مناسب يؤدي ذلك إلى توقف مضخة الصوديوم والبوتاسيوم مؤقتاً",answer:"true"});
addQuestion("biology",0,{type:"tf",question:"مقدار جهد الراحة في الخلية العصبية يقدر بـ (+30) مللي فولت",answer:"false"});
addQuestion("biology",0,{type:"tf",question:"يزداد الجهد الداخلي لليفة العصبية نتيجة دخول أيونات الصوديوم إليها",answer:"true"});
addQuestion("biology",0,{type:"tf",question:"يطلق على التغيرات الكهربائية التي ترافق زوال الاستقطاب وإعادته اسم جهد الفعل",answer:"true"});
addQuestion("biology",0,{type:"tf",question:"الشعور بالجو البارد حولك هو من وظيفة حويصلات باسينى",answer:"false"});
addQuestion("biology",0,{type:"tf",question:"يتأثر فرق الجهد داخل الليفة العصبية بدخول وخروج أيونات الصوديوم والبوتاسيوم",answer:"true"});
addQuestion("biology",0,{type:"tf",question:"تعمل قناة البوتاسيوم على إخراج أيونات (+K) في حالة إعادة الاستقطاب",answer:"true"});
addQuestion("biology",0,{type:"tf",question:"مفعول الناقل العصبي أستيل كولين يكون مؤقتاً في منطقة التشابك",answer:"true"});
addQuestion("biology",0,{type:"tf",question:"تعمل مضخة Na-K على ثبات تركيز الأيونات في حالة جهد الراحة",answer:"true"});
addQuestion("biology",0,{type:"tf",question:"التحام الحويصلات التشابكية بالغشاء قبل التشابكي يتم بمساعدة أيونات الكالسيوم",answer:"true"});
addQuestion("biology",0,{type:"tf",question:"عند حقن الجسم بمادة توقف مضخة الصوديوم تتغير قيمة جهد الراحة",answer:"true"});
addQuestion("biology",0,{type:"tf",question:"تفتح قنوات الصوديوم على غشاء الليفة العصبية فينخفض فرق الجهد",answer:"true"});
addQuestion("biology",0,{type:"tf",question:"إنزيم أستيل كولين استريز هو المسؤول عن تحطيم الناقل العصبي في الشق التشابكي",answer:"true"});
addQuestion("biology",0,{type:"tf",question:"نشعر بالجو الحار بسبب مستقبلات روفيني الموجودة في الجلد",answer:"true"});
addQuestion("biology",0,{type:"tf",question:"في حالة الاستقطاب يكون فرق الجهد بين داخل الليفة وخارجها (-70) مللي فولت",answer:"true"});
addQuestion("biology",0,{type:"tf",question:"الخلايا الدبقية الصغيرة هي التي تدعم أجسام الخلايا العصبية",answer:"false"});
addQuestion("biology",0,{type:"tf",question:"تتركز مستقبلات الضغط في القدمين وتسمى حويصلات ميسنر",answer:"false"});


addQuestion("biology",0,{type:"mcq",question:"يتم الإحساس عن طريق الخيوط العصبية في حيوان:",options:["الأميبا","البراميسيوم","الهيدرا","دودة الأرض"],answer:"الهيدرا"});

addQuestion("biology",0,{type:"mcq",question:"عدد الأعصاب الخارجة من الدماغ في الإنسان هو:",options:["62 عصباً","31 عصباً","24 عصباً","12 عصباً"],answer:"24 عصباً"});

addQuestion("biology",0,{type:"mcq",question:"خلية غراء عصبي توجد خارج الجهاز العصبي المركزي هي:",options:["النجمية","القمرية","الدبيقيات","قليلة التشجر"],answer:"القمرية"});

addQuestion("biology",0,{type:"mcq",question:"عدد الخلايا المخروطية في شبكية العين الواحدة يقارب:",options:["200 مليون","100 مليون","10 مليون","5 مليون"],answer:"5 مليون"});

addQuestion("biology",0,{type:"mcq",question:"تتركز مناطق تذوق المواد المرة في:",options:["المقدمة","الوسط","الجانبان","الخلف"],answer:"الخلف"});

addQuestion("biology",0,{type:"mcq",question:"يوجد أبسط قوس عصبي في:",options:["البراميسيوم","الهيدرا","دودة الأرض","الأميبا"],answer:"الهيدرا"});

addQuestion("biology",0,{type:"mcq",question:"يخرج من الحبل الشوكي عند الإنسان:",options:["12 زوجاً","24 زوجاً","31 زوجاً","62 زوجاً"],answer:"31 زوجاً"});

addQuestion("biology",0,{type:"mcq",question:"صبغ الريتينال يُشتق من فيتامين:",options:["D","C","B","A"],answer:"A"});

addQuestion("biology",0,{type:"mcq",question:"تتركز منطقة تذوق الحلو في:",options:["الأمام","الوسط","الجانبان","الخلف"],answer:"الأمام"});

addQuestion("biology",0,{type:"mcq",question:"الكائن الذي يمتلك جهازاً عصبياً معقداً هو:",options:["الأميبا","البراميسيوم","دودة الأرض","الهيدرا"],answer:"دودة الأرض"});

addQuestion("biology",0,{type:"mcq",question:"الخلايا التي تدعم أجسام الخلايا وتصنع النواقل العصبية هي:",options:["النجمية","شفان","القمرية","الدبقية"],answer:"النجمية"});

addQuestion("biology",0,{type:"mcq",question:"الخلايا المسؤولة عن تمييز الألوان في العين هي:",options:["العصوية","المخروطية","النجمية","القمرية"],answer:"المخروطية"});

addQuestion("biology",0,{type:"mcq",question:"عند تذوق الليمون تتأثر منطقة:",options:["الأمامية","الجانبية الأمامية","الجانبية الخلفية","الخلفية"],answer:"الجانبية الخلفية"});

addQuestion("biology",0,{type:"mcq",question:"العصب الذي ينظم النشاط اللاإرادي هو:",options:["البصري","السمعي","الشمي","الحائر"],answer:"الحائر"});

addQuestion("biology",0,{type:"mcq",question:"الخلايا التي تتحول لأنواع أخرى من خلايا الغراء العصبي تسمى:",options:["قليلة التشجر","الدبيقيات الصغيرة","بطينات المخ","الحبل الشوكي"],answer:"الدبيقيات الصغيرة"});

addQuestion("biology",0,{type:"mcq",question:"عدد الخلايا ثنائية القطب المتصلة بكل خلية مخروطية هو:",options:["أربع","ثلاث","إثنتان","واحدة"],answer:"واحدة"});

addQuestion("biology",0,{type:"mcq",question:"الخلايا التي تكوّن الغمد الميليني في الجهاز المركزي هي:",options:["القمرية","النجمية","بطينات المخ","قليلة التشجر"],answer:"قليلة التشجر"});

addQuestion("biology",0,{type:"mcq",question:"الإحساس بواسطة الشبكة العصبية يميز:",options:["الأميبا","البراميسيوم","الهيدرا","دودة الأرض"],answer:"الهيدرا"});

addQuestion("biology",0,{type:"mcq",question:"عدد الأعصاب الخارجة من الحبل الشوكي هو:",options:["62","31","24","12"],answer:"62"});

addQuestion("biology",0,{type:"mcq",question:"يتركز الصوديوم أثناء جهد الراحة:",options:["داخل الليفة","خارج الليفة","داخل النواة","في المايتوكندريا"],answer:"خارج الليفة"});

addQuestion("biology",0,{type:"mcq",question:"الناقل العصبي الشائع في التشابك الكيميائي هو:",options:["هيموجلوبين","أستيل كولين","ميلانين","ريتينال"],answer:"أستيل كولين"});

addQuestion("biology",0,{type:"mcq",question:"الخلية التي تكوّن الغمد الميليني في الجهاز العصبي المحيطي هي:",options:["النجمية","القمرية","قليلة التشجر","شفان"],answer:"شفان"});

addQuestion("biology",0,{type:"mcq",question:"الغشاء الذي يحتوي على مستقبلات بروتينية للنواقل هو:",options:["قبل التشابكي","بعد التشابكي","الغمد الميليني","غشاء شوان"],answer:"بعد التشابكي"});

addQuestion("biology",0,{type:"mcq",question:"الخلايا التي تنقل التنبيه من أعضاء الحس إلى المركز هي:",options:["حركية","حسية","موصلة","دبقية"],answer:"حسية"});

addQuestion("biology",0,{type:"mcq",question:"منطقة تذوق المالح تقع في:",options:["مقدمة اللسان","خلف اللسان","جانبي اللسان من الأمام","وسط اللسان"],answer:"جانبي اللسان من الأمام"});


addQuestion("biology",1,{type:"tf",question:"يلجأ المزارعون إلى طريقة التطعيم للمحافظة على الصفات المرغوبة في النبات",answer:"true"});
addQuestion("biology",1,{type:"tf",question:"تحتوي القطعة الوسطى في الحيوان المنوي على الميتوكندريا لتوليد الطاقة",answer:"true"});
addQuestion("biology",1,{type:"tf",question:"اكتشاف التركيب البنائي لـ DNA كان على يد العالم أوزوالد أفري",answer:"false"});
addQuestion("biology",1,{type:"tf",question:"تفرز غدة البروستات مادة مخاطية غنية بسكر الفركتوز",answer:"false"});
addQuestion("biology",1,{type:"tf",question:"تعني صيغة الشفرة AUG في mRNA إشارة إنهاء السلسلة الببتيدية",answer:"false"});
addQuestion("biology",1,{type:"tf",question:"يستطيع الكفيف تمييز الأسطح الخشنة لوجود مستقبلات ميسنر في الجلد",answer:"true"});
addQuestion("biology",1,{type:"tf",question:"يجوز نقل دم من شخص فصيلة دمه A لآخر فصيلة دمه O",answer:"false"});
addQuestion("biology",1,{type:"tf",question:"في بلازموديوم الملاريا تتكاثر الأبواغ لاجنسياً في الكبد وتنتج الميروزويتات",answer:"true"});
addQuestion("biology",1,{type:"tf",question:"عند إنتاج البنسلين يتم إمداد مخلوط الفطريات بكمية مناسبة من الأوكسجين",answer:"true"});
addQuestion("biology",1,{type:"tf",question:"لنجاح عملية التطعيم يجب وجود تشابه في الصنف والنوع بين الطعم والأصل",answer:"true"});
addQuestion("biology",1,{type:"tf",question:"الوعاء الناقل هو المستودع الرئيسي للحيوانات المنوية عند الإنسان",answer:"false"});
addQuestion("biology",1,{type:"tf",question:"الاقتران بين خليتين متجاورتين في الخيط نفسه لطحلب سبيروجيرا يسمى اقتران سلمي",answer:"true"});
addQuestion("biology",1,{type:"tf",question:"مجموع التراكيب الجينية في كل من (+A و -AB) هو أربعة تراكيب",answer:"true"});
addQuestion("biology",1,{type:"tf",question:"التكاثر يؤمن للكائنات الحية الزيادة العددية في أفراد النوع",answer:"true"});
addQuestion("biology",1,{type:"tf",question:"يوصف حمض RNA بأنه تركيب سلمي مؤلف من شريط مزدوج",answer:"false"});
addQuestion("biology",1,{type:"tf",question:"تدرج الذكاء في الإنسان صفة تتحكم بها الجينات التراكمية",answer:"true"});
addQuestion("biology",1,{type:"tf",question:"التنظيم عن طريق الأعصاب أسرع من التنظيم عن طريق الهرمونات",answer:"true"});
addQuestion("biology",1,{type:"tf",question:"الأدرينالين يوسع الأوعية الدموية المتصلة بالعضلات الإرادية",answer:"true"});
addQuestion("biology",1,{type:"tf",question:"يوجد مولدان اثنان فقط من مولدات الالتصاق في فصيلة AB",answer:"false"});
addQuestion("biology",1,{type:"tf",question:"عند استنساخ النعجة دوللي وضعت الخلية الجسدية في وسط غذائي فقير",answer:"true"});


addQuestion("biology",1,{type:"mcq",question:"سحب اليد عند ملامستها جسماً ساخناً مسؤولية:",options:["المخ","المخيخ","ساق الدماغ","الحبل الشوكي"],answer:"الحبل الشوكي"});

addQuestion("biology",1,{type:"mcq",question:"تنتقل المؤثرات الحسية خلال شبكة عصبية في حيوان:",options:["الأميبا","الهيدرا","البراميسيوم","دودة الأرض"],answer:"الهيدرا"});

addQuestion("biology",1,{type:"mcq",question:"تشجيع كمون البراعم والبذور من وظيفة:",options:["الأوكسين","الجبريلين","حامض الأبسيسيك","السيتوكينين"],answer:"حامض الأبسيسيك"});

addQuestion("biology",1,{type:"mcq",question:"الغدة الدرقية تتأثر بهرمون:",options:["TSH","STH","FSH","MSH"],answer:"TSH"});

addQuestion("biology",1,{type:"mcq",question:"تقع جزر لانجرهانز في غدة:",options:["المبيض","الخصية","البنكرياس","المعدة"],answer:"البنكرياس"});

addQuestion("biology",1,{type:"mcq",question:"يتكاثر بالقطع والتجديد حيوان:",options:["اليوجلينا","الهيدرا","الخميرة","الإسفنج"],answer:"الإسفنج"});

addQuestion("biology",1,{type:"mcq",question:"واحد من الأعضاء الآتية ينشأ من الطبقة الجنينية الخارجية ما عدا:",options:["القلب","الدماغ","الجلد","الشعر"],answer:"القلب"});

addQuestion("biology",1,{type:"mcq",question:"وضع أسس النظرية الكروموسومية العالم:",options:["بونيت","بوفري","مندل","جوهانسون"],answer:"بوفري"});

addQuestion("biology",1,{type:"mcq",question:"توارث فصيلة الدم AB يمثل سيادة:",options:["مشتركة","تامة","ناقصة","تراكمية"],answer:"مشتركة"});

addQuestion("biology",1,{type:"mcq",question:"الحمض النووي الذي يرتبط مع الحمض الأميني أثناء بناء البروتين:",options:["mRNA","rRNA","DNA","tRNA"],answer:"tRNA"});

addQuestion("biology",1,{type:"mcq",question:"سبب حركة عظيمات السمع في الأذن الوسطى هو اهتزاز:",options:["الطبلة","القربة","الصيوان","القوقعة"],answer:"الطبلة"});

addQuestion("biology",1,{type:"mcq",question:"الهرمون غير الببتيدي مما يلي:",options:["النمو","البرولاكتين","الجلوكاجون","الكورتيزول"],answer:"الكورتيزول"});

addQuestion("biology",1,{type:"mcq",question:"الغشاء الجنيني الذي يحافظ على ثبات درجة حرارة الجنين:",options:["كيس المح","الممبار","الأمنيوم","الكوريون"],answer:"الأمنيوم"});

addQuestion("biology",1,{type:"mcq",question:"يشترك التخت في تكوين الثمرة في نبات:",options:["التفاح","الفاصوليا","المشمش","القمح"],answer:"التفاح"});

addQuestion("biology",1,{type:"mcq",question:"صفة متأثرة بالجنس:",options:["سيولة الدم","الصلع الوراثي","البول السكري","عمى الألوان"],answer:"الصلع الوراثي"});

addQuestion("biology",1,{type:"mcq",question:"فطر يستخدم لإنتاج مواد بديلة عن الجليسرول:",options:["البنسيليوم","عيش الغراب","الخميرة","عفن الخبز"],answer:"الخميرة"});

addQuestion("biology",1,{type:"mcq",question:"تحويل لاكتوز الحليب إلى حمض اللاكتيك تقوم به بكتيريا:",options:["الاستربتوكوكس","النيتروسوموناس","النيتروباكتر","الزوجليا"],answer:"الاستربتوكوكس"});

addQuestion("biology",1,{type:"mcq",question:"الشفرة الوراثية التي تعني ابدأ بناء البروتين:",options:["AUG","AGA","GGA","GGU"],answer:"AUG"});

addQuestion("biology",1,{type:"mcq",question:"تحديد اتجاه حركة الرأس الدائرية يتم بواسطة:",options:["الدهليز","القارورة","المطرقة","القوقعة"],answer:"القارورة"});

addQuestion("biology",1,{type:"mcq",question:"ساق أرضية تنمو أفقياً تحت التربة:",options:["الفسيلة","الريزوم","الدرنة","الكورمة"],answer:"الريزوم"});

addQuestion("biology",1,{type:"mcq",question:"نظام تحديد الجنس في الطيور:",options:["2n-n","XX-X0","ZW-ZZ","XX-XY"],answer:"ZW-ZZ"});

addQuestion("biology",1,{type:"mcq",question:"الهرمون المستخدم لإحداث الطلق في الولادة:",options:["الأوكسيتوسين","الثيروكسين","البرولاكتين","الأنسولين"],answer:"الأوكسيتوسين"});

addQuestion("biology",1,{type:"mcq",question:"العضو الذي يتغير تحدبه عند رؤية الأجسام:",options:["الشبكية","القزحية","العدسة","الصلبة"],answer:"العدسة"});

addQuestion("biology",1,{type:"mcq",question:"القاعدة الموجودة في RNA ولا توجد في DNA:",options:["الأدينين","السايتوسين","اليوراسيل","الجوانين"],answer:"اليوراسيل"});

addQuestion("biology",1,{type:"mcq",question:"مرض العشى الليلي سببه نقص فيتامين:",options:["A","B","C","D"],answer:"A"});

addQuestion("biology",1,{type:"mcq",question:"هرمون السكريتين يحفز إفراز عصارة:",options:["المعدة","البنكرياس","الحوصلة الصفراوية","اللفائفي"],answer:"البنكرياس"});

addQuestion("biology",1,{type:"mcq",question:"تأثير السمبثاوي وجار السمبثاوي:",options:["يقوي","يعاكس","يضعف","يناظر"],answer:"يعاكس"});

addQuestion("biology",1,{type:"mcq",question:"عند الإخصاب في النبات الزهري تتكون:",options:["الأندوسبيرم","اللاقحة","النواة الأنبوبية","الجنين"],answer:"اللاقحة"});

addQuestion("biology",1,{type:"mcq",question:"النسبة المئوية للصفات السائدة في ggrr × GgRr:",options:["100%","75%","50%","25%"],answer:"25%"});

addQuestion("biology",1,{type:"mcq",question:"الطعم الأكثر تذوقاً في مؤخرة اللسان:",options:["المالح","المر","الحامض","الحلو"],answer:"المر"});


addQuestion("biology",2,{type:"tf",question:"يستخدم التكاثر الخضري لضمان الصفات الجيدة التي توجد في النبات الأصل",answer:"true"});
addQuestion("biology",2,{type:"tf",question:"يحتوي نبات البازلاء على سبعة أزواج من الصفات المتضادة",answer:"true"});
addQuestion("biology",2,{type:"tf",question:"تهتم الهندسة الجينية بإعادة ترتيب أو تركيب الجينات التي يتكون منها DNA في الكائن الحي",answer:"true"});
addQuestion("biology",2,{type:"tf",question:"في خطوات استنساخ دوللي تم زرع الجنين في رحم نعجة من فصيلة Dorset",answer:"false"});
addQuestion("biology",2,{type:"tf",question:"عند إنتاج البنسلين يوضع مخلوط الفطريات في وسط يميل قليلاً إلى القاعدة",answer:"true"});
addQuestion("biology",2,{type:"tf",question:"رجل موجب عامل الرايزيس نقي وزوجته سالبة العامل، احتمال إنجاب أطفال موجبي العامل 100%",answer:"true"});
addQuestion("biology",2,{type:"tf",question:"الألدوستيرون هرمون يعمل على حفظ معدل الصوديوم في الدم",answer:"true"});
addQuestion("biology",2,{type:"tf",question:"يقصد بالتكاثر العذري إنتاج أفراد من بويضات غير مخصبة",answer:"true"});
addQuestion("biology",2,{type:"tf",question:"في تركيب DNA ترتبط قاعدة الثايمين مع الأدينين بثلاث روابط هيدروجينية",answer:"false"});
addQuestion("biology",2,{type:"tf",question:"عند تناول إبريق الشاي الحار تتأثر مستقبلات باسينني الموجودة على سطح الجلد",answer:"true"});
addQuestion("biology",2,{type:"tf",question:"لنجاح عملية التطعيم في النبات يجب وجود تشابه بين الطعم والأصل",answer:"true"});
addQuestion("biology",2,{type:"tf",question:"الجاسترين هرمون يحفز الحوصلة الصفراوية على الانقباض",answer:"true"});
addQuestion("biology",2,{type:"tf",question:"في مفهوم الثقافة الحيوية المقطع Bio يعني حيوي",answer:"true"});
addQuestion("biology",2,{type:"tf",question:"تجويف الخلية المأخوذة من ضرع نعجة أدى إلى وقف انقساماتها",answer:"true"});
addQuestion("biology",2,{type:"tf",question:"الجينات المترابطة تخضع لقانون التوزيع الحر",answer:"true"});
addQuestion("biology",2,{type:"tf",question:"عند تذوق الليمون تتأثر مقدمة اللسان بالطعم الحامضي",answer:"false"});
addQuestion("biology",2,{type:"tf",question:"ترش أشجار المانجو بهرمون الجبريلين لمنع تساقط الأوراق والثمار",answer:"true"});
addQuestion("biology",2,{type:"tf",question:"يمكن إنتاج هرمون التستوستيرون بتقنية هندسة الجينات",answer:"true"});
addQuestion("biology",2,{type:"tf",question:"استعان الإنسان بالكائنات الحية الدقيقة في صناعة المضادات الحيوية",answer:"true"});
addQuestion("biology",2,{type:"tf",question:"الوعاء الناقل مستودع رئيسي للحيوانات المنوية عند الإنسان",answer:"true"});


addQuestion("biology",2,{type:"mcq",question:"أي الهرمونات يوسع الأوعية الدموية المتصلة بالعضلات الإرادية:",options:["الجلوكاكون","الفازوبرسين","الباراثورمون","الأدرينالين"],answer:"الأدرينالين"});

addQuestion("biology",2,{type:"mcq",question:"قشرة الغدة الكظرية تتأثر بهرمون:",options:["ICSH","ACTH","FSH","MSH"],answer:"ACTH"});

addQuestion("biology",2,{type:"mcq",question:"الهرمون المسؤول عن تفرع الساق:",options:["الإيثيلين","الجبريلين","الأوكسين","السيتوكينين"],answer:"السيتوكينين"});

addQuestion("biology",2,{type:"mcq",question:"هرمون البرولاكتين يفرز من:",options:["النخامية","الكظرية","الدرقية","الجاردرقية"],answer:"النخامية"});

addQuestion("biology",2,{type:"mcq",question:"الحمض النووي الذي يتحرك خلال الرايبوسوم:",options:["mRNA","rRNA","tRNA","DNA"],answer:"mRNA"});

addQuestion("biology",2,{type:"mcq",question:"تركيب من الأذن الداخلية:",options:["السندان","عضو كورتي","الصيوان","الركاب"],answer:"عضو كورتي"});

addQuestion("biology",2,{type:"mcq",question:"الخلايا التي تتحول إلى أنواع من خلايا الغراء العصبي:",options:["قليلة التشجر","بطانة القناة الشوكية","الدبيقيات الصغيرة","بطينات المخ"],answer:"قليلة التشجر"});

addQuestion("biology",2,{type:"mcq",question:"أي الهرمونات التالية لا توجد مستقبلاته على سطح الخلية:",options:["الكورتيزول","الأنسولين","هرمون النمو","الجلوكاكون"],answer:"الكورتيزول"});

addQuestion("biology",2,{type:"mcq",question:"توجد الأزهار ثنائية الجنس في:",options:["الصنوبر","النخيل","الفول","المشمش"],answer:"الفول"});

addQuestion("biology",2,{type:"mcq",question:"عضو لا ينشأ من الطبقة الجنينية الخارجية:",options:["الأذنين","الخصية","الشعر","الجلد"],answer:"الخصية"});

addQuestion("biology",2,{type:"mcq",question:"العدد الكروموسومي للخلية الأم لحبوب اللقاح:",options:["رباعي","ثلاثي","ثنائي","أحادي"],answer:"ثنائي"});

addQuestion("biology",2,{type:"mcq",question:"صفة غير مرتبطة بالجنس:",options:["سيولة الدم","الصلع الوراثي","البول السكري","عمى الألوان"],answer:"البول السكري"});

addQuestion("biology",2,{type:"mcq",question:"بكتيريا لا تنتج مخصبات زراعية:",options:["الاستربتوكوكاس","النيتروباكتر","النيتروسوموناس","الزوجليا"],answer:"الاستربتوكوكاس"});

addQuestion("biology",2,{type:"mcq",question:"العضو الذي يتغير تحدبه في العين:",options:["الشبكية","القزحية","العدسة","الصلبة"],answer:"العدسة"});

addQuestion("biology",2,{type:"mcq",question:"عندما تسقط البراعم في التربة لتعطي نباتاً جديداً يسمى:",options:["البصلة","الورقة","الكورمة","الفسيلة"],answer:"البصلة"});

addQuestion("biology",2,{type:"mcq",question:"تركيب لا يوجد في البذرة:",options:["اللاقحة","الأندوسبيرم","الجذير","الجنين"],answer:"اللاقحة"});

addQuestion("biology",2,{type:"mcq",question:"القاعدة المختلفة في RNA:",options:["أدينين","سايتوسين","يوراسيل","جوانين"],answer:"يوراسيل"});

addQuestion("biology",2,{type:"mcq",question:"الفطر الذي يحلل البلاستيك:",options:["الكلادوسبوريوم","الخميرة","البنسيليوم","عفن الخبز"],answer:"الكلادوسبوريوم"});

addQuestion("biology",2,{type:"mcq",question:"الهرمون الذي تفرزه جذور النبات:",options:["الأوكسين","الإيثيلين","السيتوكينين","الأبسيسيك"],answer:"السيتوكينين"});

addQuestion("biology",2,{type:"mcq",question:"الجزء الخلفي من الدماغ:",options:["ساق الدماغ","المخ","المخيخ","الحبل الشوكي"],answer:"المخيخ"});

addQuestion("biology",2,{type:"mcq",question:"الخمسة مستقبلات تعتبر:",options:["شمي","صوتي","ضوئي","تذوقي"],answer:"تذوقي"});

addQuestion("biology",2,{type:"mcq",question:"القزحية جزء من:",options:["العدسة","الشبكية","المشيمية","الصلبة"],answer:"المشيمية"});

addQuestion("biology",2,{type:"mcq",question:"البذرة في النبات الزهري تتكون من:",options:["المبيض","البويضة المخصبة","البويضة الناضجة","جدار المبيض"],answer:"البويضة المخصبة"});

addQuestion("biology",2,{type:"mcq",question:"التركيب الجيني لنبات إبطي أبيض نقي:",options:["AArr","Aarr","aaRR","AaRr"],answer:"AArr"});

addQuestion("biology",2,{type:"mcq",question:"شفرة إنهاء السلسلة الببتيدية:",options:["UAU","UGU","UAG","UGA"],answer:"UAG"});

addQuestion("biology",2,{type:"mcq",question:"البكتيريا المستخدمة لإنتاج إنزيم الكيموزين:",options:["اللاكتوباسيلس","إيشيريشيا كولاي","الاستربتوكوكاس","الميثانوجينيك"],answer:"اللاكتوباسيلس"});

addQuestion("biology",2,{type:"mcq",question:"النسبة المئوية للصفات السائدة في GgIi × GgIi:",options:["25","50","75","100"],answer:"75"});

addQuestion("biology",2,{type:"mcq",question:"العشى الليلي بسبب نقص:",options:["A","B","C","D"],answer:"A"});

addQuestion("biology",2,{type:"mcq",question:"هرمون يزيد ضغط الدم:",options:["الأستروجين","الأوكسيتوسين","البرولاكتين","الفازوبرسين"],answer:"الفازوبرسين"});

addQuestion("biology",2,{type:"mcq",question:"تركيب من تراكيب الأذن الوسطى:",options:["المطرقة","القوقعة","القارورة","الدهليز"],answer:"المطرقة"});

/* ========= الفيزياء ========= */

/* ========================= */
/* صح وخطأ */
/* ========================= */

addQuestion("physics",0,{type:"tf",question:"حركة البالونة المنفوخة أثناء خروج الهواء منها تشبه حركة الصاروخ النفاث",answer:"true"});
addQuestion("physics",0,{type:"tf",question:"الفكرة التي يتم على أساسها صناعة المولدات الكهربائية هي الظاهرة الكهروضوئية",answer:"false"});
addQuestion("physics",0,{type:"tf",question:"إذا زادت سعة المكثف في الدائرة المهتزة فإن التردد يقل",answer:"true"});
addQuestion("physics",0,{type:"tf",question:"شوائب بلورة المجمع في الترانزستور أكثر من شوائب بلورة الباعث",answer:"false"});
addQuestion("physics",0,{type:"tf",question:"الانبعاث الإلكتروني الثانوي يحدث نتيجة تصادم الإلكترونات مع الذرات المتعادلة",answer:"false"});
addQuestion("physics",0,{type:"tf",question:"الخلايا الكهروضوئية في أنبوبة التصوير التلفزيوني عبارة عن حبيبات فضة مطلية بالسيزيوم",answer:"true"});
addQuestion("physics",0,{type:"tf",question:"أول نظرية ذرية تنص على أن المادة تتكون من ذرات هي نظرية بوهر",answer:"false"});
addQuestion("physics",0,{type:"tf",question:"طاقة حركة الإلكترونات المنبعثة تتناسب طردياً مع شدة الضوء الساقط",answer:"false"});
addQuestion("physics",0,{type:"tf",question:"مقذوف سرعته 200 م/ث وزاويته 30° تكون ذروة قذفه 1000 م",answer:"false"});
addQuestion("physics",0,{type:"tf",question:"يعود مؤشر الأميتر الحراري إلى الصفر بسرعة عند انقطاع التيار",answer:"false"});
addQuestion("physics",0,{type:"tf",question:"في بلورة السيليكون النقي ترتبط كل ذرة مع أربع ذرات مجاورة",answer:"true"});
addQuestion("physics",0,{type:"tf",question:"دائرة الميكروفون تحول التيار المعبر عن الصوت إلى موجات صوتية",answer:"false"});
addQuestion("physics",0,{type:"tf",question:"كبريتيد الزنك لها خاصية الوميض عند اصطدام جسيمات ألفا بها",answer:"true"});
addQuestion("physics",0,{type:"tf",question:"كمية التحرك الزاوي تساوي عزم القصور الذاتي × السرعة الزاوية",answer:"true"});
addQuestion("physics",0,{type:"tf",question:"تؤثر الجاذبية الأرضية على مقدار السرعة المدارية للقمر الصناعي",answer:"true"});
addQuestion("physics",0,{type:"tf",question:"المفاعلة السعوية تتناسب طردياً مع السعة",answer:"false"});
addQuestion("physics",0,{type:"tf",question:"أشباه الموصلات النقية تكون عازلة تماماً عند الصفر المطلق",answer:"true"});
addQuestion("physics",0,{type:"tf",question:"يعتبر طيف الشمس طيفاً متصلاً",answer:"false"});
addQuestion("physics",0,{type:"tf",question:"تُحاط أنبوبة الأشعة السينية بدرع من الرصاص",answer:"true"});
addQuestion("physics",0,{type:"tf",question:"شدة تيار الخلية الكهروضوئية يتناسب عكسياً مع شدة الضوء",answer:"false"});


/* ========================= */
/* اختيار من متعدد */
/* ========================= */

addQuestion("physics",0,{type:"mcq",question:"تعمل الصواريخ النفاثة وفقاً لـ",options:["كمية التحرك الزاوي","عزم الازدواج","الفعل ورد الفعل","عزم الدوران"],answer:"الفعل ورد الفعل"});

addQuestion("physics",0,{type:"mcq",question:"الخيط الملفوف حول بكرة الأميتر الحراري مصنوع من",options:["الصوف","القطن","النايلون","الحرير"],answer:"الحرير"});

addQuestion("physics",0,{type:"mcq",question:"تجمع الجهود جمعاً اتجاهياً لاختلافها في",options:["التردد","زاوية الطور","شدة التيار","الزمن الدوري"],answer:"زاوية الطور"});

addQuestion("physics",0,{type:"mcq",question:"تتميز بلورة المجمع في الترانزستور بأنها",options:["الأكبر مساحة","الأصغر مساحة","الأقل شوائب","الأكثر شوائب"],answer:"الأكبر مساحة"});

addQuestion("physics",0,{type:"mcq",question:"تدخل أنبوبة أشعة الكاثود في صناعة الأجهزة التالية ما عدا",options:["التليسكوب","الكينوسكوب","الإسيلوسكوب","الإيكونوسكوب"],answer:"التليسكوب"});

addQuestion("physics",0,{type:"mcq",question:"أساس عمل الرادار يقوم على ظاهرة الاهتزاز",options:["المغناطيسي","الكهرومغناطيسي","الكهربائي","الحراري"],answer:"الكهرومغناطيسي"});

addQuestion("physics",0,{type:"mcq",question:"وحدة قياس الكمية الفيزيائية ج·ك²/نق هي",options:["نيوتن.م","نيوتن.م²","نيوتن.ث","نيوتن"],answer:"نيوتن.م"});

addQuestion("physics",0,{type:"mcq",question:"شدة التيار في دائرة جهدها 100 فولت ومقاوماتها 40 و70 و40",options:["8 أمبير","6 أمبير","4 أمبير","2 أمبير"],answer:"2 أمبير"});

addQuestion("physics",0,{type:"mcq",question:"المدى الأفقي لمقذوف سرعته 100 م/ث وزاويته 60°",options:["7661.2","7461.2","7561.2","7361.2"],answer:"7561.2"});

addQuestion("physics",0,{type:"mcq",question:"بلورة شبه الموصل من النوع P تكون",options:["سالبة","متعادلة","متأينة","موجبة"],answer:"متعادلة"});

addQuestion("physics",0,{type:"mcq",question:"من تطبيقات قانون حفظ كمية التحرك الزاوي",options:["حركة المقذوفات","حركة الصاروخ","التصادمات","التنبؤ بالخسوف"],answer:"التنبؤ بالخسوف"});

addQuestion("physics",0,{type:"mcq",question:"العجلة الأفقية للمقذوف تساوي صفراً لأن السرعة الأفقية",options:["منتظمة","متزايدة","متناقصة","صفر"],answer:"منتظمة"});

addQuestion("physics",0,{type:"mcq",question:"تستخدم في إرسال موجات البث الإذاعي دائرة",options:["رنين","مسح","مهتزة","السماعة"],answer:"مهتزة"});

addQuestion("physics",0,{type:"mcq",question:"تحويل الطاقة الضوئية إلى طاقة كهربائية يتم بواسطة",options:["الميكروفون","الإيكونوسكوب","السماعة","دائرة الرنين"],answer:"الإيكونوسكوب"});

addQuestion("physics",0,{type:"mcq",question:"الغازات الساخنة توصل التيار لأن ذراتها",options:["مثارة","متأينة","متعادلة","متحركة"],answer:"متأينة"});

addQuestion("physics",0,{type:"mcq",question:"النموذج الذري الذي ساعد في تفسير النظرية الحركية للغازات",options:["دالتون","تومسون","رذرفورد","بوهر"],answer:"دالتون"});

addQuestion("physics",0,{type:"mcq",question:"أشعة تقطع مسافات طويلة محتفظة بشدتها",options:["الليزر","السينية","فوق البنفسجية","تحت الحمراء"],answer:"الليزر"});

addQuestion("physics",0,{type:"mcq",question:"يفلت جسم من الجاذبية عندما تكون طاقة حركته",options:["طو=4طح","طو=3طح","طو=2طح","طو=طح"],answer:"طو=طح"});

addQuestion("physics",0,{type:"mcq",question:"وحدة قياس Iω² هي وحدة قياس",options:["كمية التحرك الخطي","كمية التحرك الزاوي","الطاقة الحركية","القوة"],answer:"الطاقة الحركية"});

addQuestion("physics",0,{type:"mcq",question:"إذا كان تكبير التيار 20 وتكبير الجهد 500 ومقاومة الدخول 80 فإن مقاومة المجمع",options:["2000","500","80","200"],answer:"2000"});

addQuestion("physics",0,{type:"mcq",question:"من التطبيقات العملية لقانون حفظ كمية التحرك الخطي",options:["الزلازل","التصادمات","الأقمار الصناعية","الخسوف"],answer:"التصادمات"});

addQuestion("physics",0,{type:"mcq",question:"يرمز للموجات المكيفة السعة",options:["A.M","A.C","D.C","F.M"],answer:"A.M"});

addQuestion("physics",0,{type:"mcq",question:"اللوحة التي تتجمع عليها حزم الإلكترونات في التلفاز الملون",options:["لوح الموزاييك","الشاشة","قناع الظل","لوح الميكا"],answer:"قناع الظل"});

addQuestion("physics",0,{type:"mcq",question:"التدريج على شاشة الكينوسكوب يحدد مباشرة",options:["بعد الهدف","زمن الذهاب والإياب","سرعة الهدف","موقع الهدف"],answer:"بعد الهدف"});

addQuestion("physics",0,{type:"mcq",question:"حسب دالتون المادة تتكون من",options:["أيونات","جزيئات","ذرات","إلكترونات"],answer:"ذرات"});

addQuestion("physics",0,{type:"mcq",question:"يمر أكبر تيار في دائرة الرنين عندما",options:["م=حث","م=سع","حث=سع","حث≠سع"],answer:"حث=سع"});

addQuestion("physics",0,{type:"mcq",question:"حسب مبدأ بلانك",options:["ط=hf","ط=hf","ط=nhf","ط=nhf"],answer:"ط=nhf"});

addQuestion("physics",0,{type:"mcq",question:"معادلة آينشتاين للظاهرة الكهروضوئية",options:["طاع=hf+w0","w0=طاع+hf","hf=طاع+w0","hf=طاع-w0"],answer:"hf=طاع+w0"});

addQuestion("physics",0,{type:"mcq",question:"إذا كانت سرعة إلكترون الهيدروجين ع1/3 فإنه في المدار",options:["الثاني","الرابع","الخامس","السادس"],answer:"السادس"});

addQuestion("physics",0,{type:"mcq",question:"إذا كان زمن ذهاب وإياب موجات الرادار 0.012 ثانية فإن بعد الهدف",options:["1.8×10^6","1.8×10^5","1.8×10^4","1.8×10^3"],answer:"1.8×10^6"});

/* ========================= */
/* صح وخطأ (20 سؤال) */
/* ========================= */

addQuestion("physics",1,{type:"tf",question:"يكون اتجاه كمية التحرك الخطي لجسم باتجاه سرعته",answer:"true"});
addQuestion("physics",1,{type:"tf",question:"(8 كم/ث) هي سرعة إفلات الأجسام من الجاذبية الأرضية",answer:"false"});
addQuestion("physics",1,{type:"tf",question:"يستخدم جهاز الأميتر الحراري لقياس شدة التيار المتردد والمستمر",answer:"true"});
addQuestion("physics",1,{type:"tf",question:"في التوصيل الأمامي للوصلة الثنائية تتنافر حاملات الشحنة مع الأقطاب المشابهة لها",answer:"true"});
addQuestion("physics",1,{type:"tf",question:"المجموعة الحارفة في الكينوسكوب تولد مجالين كهربائيين متعامدين",answer:"false"});
addQuestion("physics",1,{type:"tf",question:"هوائي الإرسال في محطة الإذاعة يحول التيار المعبر عن الصوت إلى موجات كهرومغناطيسية",answer:"true"});
addQuestion("physics",1,{type:"tf",question:"يتكون التيار المعبر عن الصورة في الإيكونوسكوب بعد عملية المسح التلفازي",answer:"true"});
addQuestion("physics",1,{type:"tf",question:"اكتشاف الإلكترون أبطل الادعاء بأن الذرة لا يمكن تقسيمها",answer:"true"});
addQuestion("physics",1,{type:"tf",question:"الطاقات المسموحة للإلكترون داخل ذرة الهيدروجين هي طاقات مكممة",answer:"true"});
addQuestion("physics",1,{type:"tf",question:"يحاط عادة أنبوب الأشعة السينية بدرع واقٍ من الرصاص",answer:"true"});
addQuestion("physics",1,{type:"tf",question:"دفع محرك الصاروخ يساوي التغير في كمية التحرك للصاروخ",answer:"true"});
addQuestion("physics",1,{type:"tf",question:"مدى المقذوف يقل إذا زادت زاوية القذف عن 45 درجة",answer:"true"});
addQuestion("physics",1,{type:"tf",question:"إذا كانت زاوية الطور سالبة فإن التيار يسبق الجهد",answer:"true"});
addQuestion("physics",1,{type:"tf",question:"لكي يحدث التكبير في الترانزستور يجب أن تكون مقاومة الدخول أصغر من مقاومة الخروج",answer:"true"});
addQuestion("physics",1,{type:"tf",question:"المرشح الضوئي يسمح بنفاذ الضوء الذي يماثله في اللون فقط",answer:"true"});
addQuestion("physics",1,{type:"tf",question:"تنبعث الإلكترونات الثانوية من الكاثود عند اصطدام الإلكترونات الأولية به",answer:"true"});
addQuestion("physics",1,{type:"tf",question:"طيف العناصر الكيميائية المثارة هو طيف خطي مميز",answer:"true"});
addQuestion("physics",1,{type:"tf",question:"الأشعة السينية تقع في الطيف غير المرئي وترددها عالٍ جداً",answer:"true"});
addQuestion("physics",1,{type:"tf",question:"في تجربة مليكان يمثل ميل الخط المستقيم ثابت بلانك",answer:"true"});
addQuestion("physics",1,{type:"tf",question:"سرعة القمر الصناعي تزداد كلما اقترب من سطح الأرض",answer:"true"});


/* ========================= */
/* اختيار من متعدد (30 سؤال) */
/* ========================= */

addQuestion("physics",1,{type:"mcq",question:"في التصادم غير المرن تفقد الأجسام جزءاً من طاقتها على شكل:",options:["ضوئية","حرارية","كيميائية","نووية"],answer:"حرارية"});

addQuestion("physics",1,{type:"mcq",question:"لاستقبال موجات البث يوضع ملف دائرة الرنين في مجال ملف متصل بـ:",options:["هوائي الاستقبال","هوائي الإرسال","مكثف ثابت","ترانزستور"],answer:"هوائي الاستقبال"});

addQuestion("physics",1,{type:"mcq",question:"يرمز للموجات مكيفة التردد بالرمز:",options:["A.M","F.M","D.C","A.C"],answer:"F.M"});

addQuestion("physics",1,{type:"mcq",question:"القيمة العملية للجهد الحاجز في ثنائية السيليكون:",options:["0.1 فولت","0.3 فولت","0.7 فولت","1 فولت"],answer:"0.7 فولت"});

addQuestion("physics",1,{type:"mcq",question:"تتحرك النقطة المضيئة في الإسيلوسكوب بواسطة جهد:",options:["مستمر","جيبي","منشاري","مثلثي"],answer:"منشاري"});

addQuestion("physics",1,{type:"mcq",question:"العملية التي تقل فيها حاملات الشحنة داخل أنبوبة التفريغ تسمى:",options:["التأين","الإثارة","إعادة الاتحاد","التحلل"],answer:"إعادة الاتحاد"});

addQuestion("physics",1,{type:"mcq",question:"الخلايا الكهروضوئية في الموزاييك مطلية بمادة:",options:["الزنك","السيزيوم","الرصاص","النحاس"],answer:"السيزيوم"});

addQuestion("physics",1,{type:"mcq",question:"الذرة تشبه كرة مصمتة تتخللها إلكترونات حسب نموذج:",options:["دالتون","رذرفورد","تومسون","بوهر"],answer:"تومسون"});

addQuestion("physics",1,{type:"mcq",question:"يستخدم في صناعة ليزر الياقوت أكسيد:",options:["الصوديوم","الألومنيوم","الحديد","النحاس"],answer:"الألومنيوم"});

addQuestion("physics",1,{type:"mcq",question:"عند سقوط الأشعة فوق البنفسجية على لوح زنك متعادل تصبح شحنته:",options:["سالبة","موجبة","متعادلة","تنعدم"],answer:"موجبة"});

addQuestion("physics",1,{type:"mcq",question:"المقذوف بزاوية 45° يصل إلى:",options:["أقصى ارتفاع","أقصى مدى أفقي","أقل زمن","أقل سرعة"],answer:"أقصى مدى أفقي"});

addQuestion("physics",1,{type:"mcq",question:"تزداد القوة الدافعة الكهربية في الدينامو بزيادة كل ما يلي ما عدا:",options:["عدد اللفات","مساحة الملف","شدة المجال","المقاومة"],answer:"المقاومة"});

addQuestion("physics",1,{type:"mcq",question:"في دائرة مكثف فقط يكون الجهد:",options:["يسبق التيار","يتأخر عن التيار","في نفس الطور","يسبق 180"],answer:"يتأخر عن التيار"});

addQuestion("physics",1,{type:"mcq",question:"وظيفة قناع الظل في التلفاز الملون:",options:["توليد الإلكترونات","توجيه الإلكترونات للألوان الثلاثة","تسخين الفتيل","تكبير الإشارة"],answer:"توجيه الإلكترونات للألوان الثلاثة"});

addQuestion("physics",1,{type:"mcq",question:"الجهاز الذي يعمل كمكبر أو مفتاح:",options:["الوصلة الثنائية","الترانزستور","المكثف","المقاومة"],answer:"الترانزستور"});

addQuestion("physics",1,{type:"mcq",question:"وظيفة الفتيل في أنبوبة أشعة الكاثود:",options:["توليد مجال مغناطيسي","تسخين الكاثود","جذب الإلكترونات","تلوين الشاشة"],answer:"تسخين الكاثود"});

addQuestion("physics",1,{type:"mcq",question:"طاقة الإلكترون في المدار الأول للهيدروجين:",options:["-13.6 إ.ف","13.6 إ.ف","صفر","-3.4 إ.ف"],answer:"-13.6 إ.ف"});

addQuestion("physics",1,{type:"mcq",question:"الأشعة الأكثر نفاذية:",options:["فوق البنفسجية","تحت الحمراء","الأشعة السينية","الضوء الأخضر"],answer:"الأشعة السينية"});

addQuestion("physics",1,{type:"mcq",question:"جهد الإيقاف يعتمد على:",options:["شدة الضوء","تردد الضوء","مساحة السطح","زمن التعرض"],answer:"تردد الضوء"});

addQuestion("physics",1,{type:"mcq",question:"وحدة السرعة الزاوية:",options:["م/ث","راد/ث","هرتز","نيوتن"],answer:"راد/ث"});

addQuestion("physics",1,{type:"mcq",question:"السرعة المدارية تتناسب عكسياً مع:",options:["كتلة القمر","الجذر التربيعي لنصف قطر المدار","ثابت الجذب","مساحة المدار"],answer:"الجذر التربيعي لنصف قطر المدار"});

addQuestion("physics",1,{type:"mcq",question:"في حالة الرنين تكون المعاوقة:",options:["المفاعلة الحثية","المفاعلة السعوية","المقاومة الأومية","صفر"],answer:"المقاومة الأومية"});

addQuestion("physics",1,{type:"mcq",question:"الطبقة الرقيقة في الترانزستور تسمى:",options:["الباعث","القاعدة","المجمع","الوصلة"],answer:"القاعدة"});

addQuestion("physics",1,{type:"mcq",question:"الجهاز المستخدم للتقويم نصف موجي:",options:["المحول","الوصلة الثنائية","الأميتر","الملف"],answer:"الوصلة الثنائية"});

addQuestion("physics",1,{type:"mcq",question:"المسافة بين قمتين متتاليتين تسمى:",options:["التردد","السعة","الطول الموجي","السرعة"],answer:"الطول الموجي"});

addQuestion("physics",1,{type:"mcq",question:"الأشعة السينية تنتج من اصطدام إلكترونات سريعة بـ:",options:["هدف معدني","لوح زجاجي","غاز خامل","ماء"],answer:"هدف معدني"});

addQuestion("physics",1,{type:"mcq",question:"سلسلة الطيف المرئي للهيدروجين:",options:["ليمان","بالمر","باشين","براكيت"],answer:"بالمر"});

addQuestion("physics",1,{type:"mcq",question:"الثابت h يسمى:",options:["ثابت رذرفورد","ثابت نيوتن","ثابت بلانك","ثابت آينشتاين"],answer:"ثابت بلانك"});

addQuestion("physics",1,{type:"mcq",question:"إذا كان التردد 50Hz فإن الزمن الدوري:",options:["0.02 ثانية","0.2 ثانية","2 ثانية","50 ثانية"],answer:"0.02 ثانية"});

addQuestion("physics",1,{type:"mcq",question:"تستخدم الأشعة تحت الحمراء في:",options:["الرؤية الليلية","كشف الكسور","تعقيم الأدوات","شحن البطاريات"],answer:"الرؤية الليلية"});
/* ========================= */
/* صح وخطأ (20 سؤال) */
/* ========================= */

addQuestion("physics",2,{type:"tf",question:"يكون اتجاه كمية التحرك الخطي في نفس اتجاه سرعة الجسم المتحرك",answer:"true"});
addQuestion("physics",2,{type:"tf",question:"طاقة الحركة للأجسام المتصادمة تكون محفوظة في جميع التصادمات",answer:"false"});
addQuestion("physics",2,{type:"tf",question:"القمر الصناعي الذي سرعته المدارية 7800 م/ث يكون ارتفاعه أقل من القمر الذي سرعته 7200 م/ث",answer:"true"});
addQuestion("physics",2,{type:"tf",question:"كلما زادت القوة الدافعة الكهربائية للمصدر زادت سرعة الإلكترونات المنبعثة من الفتيلة في أنبوبة الأشعة السينية",answer:"true"});
addQuestion("physics",2,{type:"tf",question:"في وصلة P-N تكون منطقة الفراغ خالية من حاملات الشحنة",answer:"true"});
addQuestion("physics",2,{type:"tf",question:"الطاقة الإشعاعية المنبعثة من سطح الجسم تتناسب مع القوة الرابعة لدرجة حرارته المطلقة",answer:"true"});
addQuestion("physics",2,{type:"tf",question:"يعمل المحول الكهربائي على رفع أو خفض الجهد المستمر",answer:"false"});
addQuestion("physics",2,{type:"tf",question:"تستخدم الخلية الكهروضوئية في فتح وغلق الأبواب آلياً",answer:"true"});
addQuestion("physics",2,{type:"tf",question:"قوة الطرد المركزية للقمر الصناعي تعادل قوة جذب الأرض له",answer:"true"});
addQuestion("physics",2,{type:"tf",question:"الإلكترون فولت هو وحدة قياس فرق الجهد",answer:"false"});
addQuestion("physics",2,{type:"tf",question:"دالة الشغل للمعدن تعتمد على نوع مادة المعدن",answer:"true"});
addQuestion("physics",2,{type:"tf",question:"يزداد اتساع منطقة الاستنزاف في الوصلة الثنائية عند التوصيل الأمامي",answer:"false"});
addQuestion("physics",2,{type:"tf",question:"الأشعة السينية موجات كهرومغناطيسية ذات طول موجي قصير جداً",answer:"true"});
addQuestion("physics",2,{type:"tf",question:"تتحرك القذيفة في اتجاهين متعامدين أفقي ورأسي في آن واحد",answer:"true"});
addQuestion("physics",2,{type:"tf",question:"سرعة القذيفة عند أي نقطة تساوي الجذر التربيعي لمجموع مربعي مركبتي السرعة",answer:"true"});
addQuestion("physics",2,{type:"tf",question:"عند أقصى ارتفاع للقذيفة تكون السرعة الرأسية صفر",answer:"true"});
addQuestion("physics",2,{type:"tf",question:"يستخدم المجمع في الترانزستور كمصدر لحاملات الشحنة",answer:"false"});
addQuestion("physics",2,{type:"tf",question:"الطاقة الكلية للإلكترون في مدارات ذرة الهيدروجين سالبة دائماً",answer:"true"});
addQuestion("physics",2,{type:"tf",question:"تستخدم الموجات الراديوية في الرادار لأنها تنفذ من طبقة الأيونوسفير",answer:"false"});
addQuestion("physics",2,{type:"tf",question:"يعتبر الترانزستور أداة لتقويم التيار المتردد",answer:"false"});


/* ========================= */
/* اختيار من متعدد (30 سؤال) */
/* ========================= */

addQuestion("physics",2,{type:"mcq",question:"تعتمد السرعة المدارية للقمر الصناعي على:",options:["كتلة القمر الصناعي","نصف قطر الأرض","نصف قطر المدار","شكل القمر الصناعي"],answer:"نصف قطر المدار"});

addQuestion("physics",2,{type:"mcq",question:"وحدة قياس الدفع في النظام الدولي:",options:["نيوتن ثانية","جول ثانية","كجم م/ث²","وات"],answer:"نيوتن ثانية"});

addQuestion("physics",2,{type:"mcq",question:"يكون المدى الأفقي للقذيفة أكبر ما يمكن عند زاوية:",options:["30°","45°","60°","90°"],answer:"45°"});

addQuestion("physics",2,{type:"mcq",question:"انتقال إلكترون الهيدروجين إلى المدار الأول ينتج متسلسلة:",options:["بالمر","باشين","ليمان","براكيت"],answer:"ليمان"});

addQuestion("physics",2,{type:"mcq",question:"تستخدم دائرة الرنين في اللاسلكي لـ:",options:["تكبير الصوت","استقبال موجة ذات تردد معين","تحويل التيار","توليد موجات مستمرة"],answer:"استقبال موجة ذات تردد معين"});

addQuestion("physics",2,{type:"mcq",question:"النسبة بين طاقة الفوتون وتردده تسمى:",options:["سرعة الضوء","ثابت بلانك","دالة الشغل","جهد الإيقاف"],answer:"ثابت بلانك"});

addQuestion("physics",2,{type:"mcq",question:"تصنع فتيلة أنبوبة الأشعة السينية من:",options:["النحاس","التنجستن","الألمنيوم","الرصاص"],answer:"التنجستن"});

addQuestion("physics",2,{type:"mcq",question:"يعمل الترانزستور كمفتاح مغلق عندما يكون جهد القاعدة:",options:["سالب","صفر","موجب في NPN","منخفض جداً"],answer:"موجب في NPN"});

addQuestion("physics",2,{type:"mcq",question:"سرعة الضوء في الفراغ:",options:["3×10⁵","3×10⁷","3×10⁸","3×10⁶"],answer:"3×10⁸"});

addQuestion("physics",2,{type:"mcq",question:"أشعة المهبط عبارة عن:",options:["بروتونات","نيوترونات","إلكترونات","فوتونات"],answer:"إلكترونات"});

addQuestion("physics",2,{type:"mcq",question:"قاعدة الترانزستور تكون:",options:["سميكة جداً","رقيقة جداً وقليلة الشوائب","موصلة للأرض دائماً","مصنوعة من المعدن"],answer:"رقيقة جداً وقليلة الشوائب"});

addQuestion("physics",2,{type:"mcq",question:"يقل المدى الأفقي للقذيفة إذا زادت:",options:["السرعة الابتدائية","مقاومة الهواء","زاوية القذف حتى 45","كتلة القذيفة"],answer:"مقاومة الهواء"});

addQuestion("physics",2,{type:"mcq",question:"أقل طاقة لتحرير إلكترون من سطح المعدن تسمى:",options:["طاقة الحركة","دالة الشغل","جهد التأين","طاقة الربط"],answer:"دالة الشغل"});

addQuestion("physics",2,{type:"mcq",question:"وظيفة المحول الرافع في محطات التوليد:",options:["زيادة التيار","تقليل الفقد أثناء النقل","خفض الجهد","زيادة التردد"],answer:"تقليل الفقد أثناء النقل"});

addQuestion("physics",2,{type:"mcq",question:"المحرك الكهربائي يحول الطاقة إلى:",options:["حرارية","كيميائية","ميكانيكية","نووية"],answer:"ميكانيكية"});

addQuestion("physics",2,{type:"mcq",question:"الجهاز المستخدم لقياس التيارات الصغيرة جداً:",options:["الأميتر","الفولتميتر","الجلفانومتر","الأوم متر"],answer:"الجلفانومتر"});

addQuestion("physics",2,{type:"mcq",question:"إضافة شوائب لشبه الموصل تسمى:",options:["التأين","التطعيم","التوصيل","التحليل"],answer:"التطعيم"});

addQuestion("physics",2,{type:"mcq",question:"يرمز للترانزستور NPN بالترتيب:",options:["PNP","NPN","PNN","NPP"],answer:"NPN"});

addQuestion("physics",2,{type:"mcq",question:"الموجات التي لا تحتاج وسط مادي:",options:["الصوتية","الميكانيكية","الكهرومغناطيسية","المائية"],answer:"الكهرومغناطيسية"});

addQuestion("physics",2,{type:"mcq",question:"يستخدم الرادار في:",options:["الطبخ","تحديد مواقع الأهداف وسرعتها","توليد الكهرباء","التصوير بالأشعة"],answer:"تحديد مواقع الأهداف وسرعتها"});