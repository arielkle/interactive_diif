import React, { useState } from 'react';

const LearningStylesVisual = () => {
  const [activeTab, setActiveTab] = useState('channels');
  const [hoveredItem, setHoveredItem] = useState(null);

  const renderContent = () => {
    switch(activeTab) {
      case 'channels':
        return (
          <div className="flex flex-col p-6 space-y-6 h-full" dir="rtl">
            <h3 className="text-xl font-bold text-purple-700 text-right">ערוצי למידה (סגנונות למידה)</h3>
            <p className="text-gray-600 text-right mb-4">הדרכים שבהן התלמידים מעדיפים לקלוט ולעבד מידע</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4" dir="rtl">
              <div 
                className={`p-4 rounded-lg shadow-lg transition-all duration-300 transform ${hoveredItem === 'visual' ? 'scale-105 bg-indigo-100' : 'bg-white'}`}
                onMouseEnter={() => setHoveredItem('visual')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="flex flex-row items-center" dir="rtl">
                  <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-indigo-600 text-right">ויזואלי</h4>
                    <p className="text-gray-600 text-right">תלמידים שלומדים טוב יותר דרך תרשימים, תמונות, צבעים ומפות.</p>
                  </div>
                </div>
              </div>
              
              <div 
                className={`p-4 rounded-lg shadow-lg transition-all duration-300 transform ${hoveredItem === 'auditory' ? 'scale-105 bg-blue-100' : 'bg-white'}`}
                onMouseEnter={() => setHoveredItem('auditory')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="flex flex-row items-center" dir="rtl">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 010 12.728" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-600 text-right">שמיעתי</h4>
                    <p className="text-gray-600 text-right">מעדיפים שמיעת הסברים, דיונים, שיח או הרצאות.</p>
                  </div>
                </div>
              </div>
              
              <div 
                className={`p-4 rounded-lg shadow-lg transition-all duration-300 transform ${hoveredItem === 'kinesthetic' ? 'scale-105 bg-emerald-100' : 'bg-white'}`}
                onMouseEnter={() => setHoveredItem('kinesthetic')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="flex flex-row items-center" dir="rtl">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-emerald-600 text-right">תנועתי/חושי</h4>
                    <p className="text-gray-600 text-right">לומדים טוב דרך התנסות, ניסוי וטעייה, תנועה או בנייה פיזית.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 rounded-lg border-r-4 border-purple-500 text-right" dir="rtl">
              <p className="text-purple-700 italic">
                "שיטת הוראה דיפרנציאלית משלבת בתוכה מגוון אסטרטגיות למידה מסדר גבוה המאפשרות לתלמיד לבחור את תהליכי הלמידה והצגת הידע על פי סגנון הלמידה האישי שלו."
              </p>
            </div>
          </div>
        );
      
      case 'conditions':
        return (
          <div className="flex flex-col p-6 space-y-6 h-full" dir="rtl">
            <h3 className="text-xl font-bold text-pink-700 text-right">תנאי למידה מועדפים</h3>
            <p className="text-gray-600 text-right mb-4">התנאים הסביבתיים והארגוניים שתורמים ליעילות הלמידה</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4" dir="rtl">
              <div 
                className={`p-4 rounded-lg shadow-lg transition-all duration-300 transform ${hoveredItem === 'quiet' ? 'scale-105 bg-pink-100' : 'bg-white'}`}
                onMouseEnter={() => setHoveredItem('quiet')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="flex flex-row items-center" dir="rtl">
                  <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M21 12l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-pink-600 text-right">סביבה שקטה</h4>
                    <p className="text-gray-600 text-right">לתלמידים שזקוקים לריכוז גבוה ללא הסחות דעת.</p>
                  </div>
                </div>
              </div>
              
              <div 
                className={`p-4 rounded-lg shadow-lg transition-all duration-300 transform ${hoveredItem === 'noisy' ? 'scale-105 bg-rose-100' : 'bg-white'}`}
                onMouseEnter={() => setHoveredItem('noisy')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="flex flex-row items-center" dir="rtl">
                  <div className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-rose-600 text-right">סביבה רועשת/מלאת גירויים</h4>
                    <p className="text-gray-600 text-right">לתלמידים שלומדים טוב יותר תוך כדי תנועה, שיחה או מוזיקה.</p>
                  </div>
                </div>
              </div>
              
              <div 
                className={`p-4 rounded-lg shadow-lg transition-all duration-300 transform ${hoveredItem === 'workstyle' ? 'scale-105 bg-fuchsia-100' : 'bg-white'}`}
                onMouseEnter={() => setHoveredItem('workstyle')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="flex flex-row items-center" dir="rtl">
                  <div className="w-12 h-12 rounded-full bg-fuchsia-500 flex items-center justify-center ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-fuchsia-600 text-right">עבודה עצמאית מול עבודה בקבוצה</h4>
                    <p className="text-gray-600 text-right">התאמה לסוג האינטראקציה הרצויה ללומד.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-pink-50 rounded-lg border-r-4 border-pink-500 text-right" dir="rtl">
              <p className="text-pink-700">
                "תלמידים רבים אינם מודעים לכך שדרך אחת של למידה פחות יעילה עבורם מאחרת. הכרה של סגנונות למידה יכולה להקל על התסכול, לשפר מוטיבציה ולהגביר את המסוגלות."
              </p>
            </div>
          </div>
        );
      
      case 'memory':
        return (
          <div className="flex flex-col p-6 space-y-6 h-full" dir="rtl">
            <h3 className="text-xl font-bold text-amber-700 text-right">תהליכי זכירה ועיבוד מידע</h3>
            <p className="text-gray-600 text-right mb-4">אופי הקליטה, הארגון והשליפה של מידע</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4" dir="rtl">
              <div 
                className={`p-4 rounded-lg shadow-lg transition-all duration-300 transform ${hoveredItem === 'processing' ? 'scale-105 bg-amber-100' : 'bg-white'}`}
                onMouseEnter={() => setHoveredItem('processing')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="flex flex-row items-center" dir="rtl">
                  <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-amber-600 text-right">עיבוד מידע</h4>
                    <p className="text-gray-600 text-right">עיבוד מידע מילולי לעומת חזותי</p>
                  </div>
                </div>
              </div>
              
              <div 
                className={`p-4 rounded-lg shadow-lg transition-all duration-300 transform ${hoveredItem === 'speed' ? 'scale-105 bg-yellow-100' : 'bg-white'}`}
                onMouseEnter={() => setHoveredItem('speed')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="flex flex-row items-center" dir="rtl">
                  <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-yellow-600 text-right">מהירות עיבוד</h4>
                    <p className="text-gray-600 text-right">חלק מהתלמידים צריכים זמן עיבוד ארוך יותר.</p>
                  </div>
                </div>
              </div>
              
              <div 
                className={`p-4 rounded-lg shadow-lg transition-all duration-300 transform ${hoveredItem === 'retrieval' ? 'scale-105 bg-orange-100' : 'bg-white'}`}
                onMouseEnter={() => setHoveredItem('retrieval')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="flex flex-row items-center" dir="rtl">
                  <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-orange-600 text-right">שליפת מידע</h4>
                    <p className="text-gray-600 text-right">דרכי ההיזכרות שונות – חלקם דרך סיפור, אחרים דרך דימויים.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-amber-50 rounded-lg border-r-4 border-amber-500 text-right" dir="rtl">
              <p className="text-amber-700">
                הבנת דרכי עיבוד המידע וזכירה היא קריטית לפיתוח אסטרטגיות למידה יעילות המותאמות לכל תלמיד ותלמידה.
              </p>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div className="flex flex-col bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl shadow-xl overflow-hidden max-w-4xl mx-auto" dir="rtl" style={{textAlign: 'right'}}>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-6 text-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center">שלושת רבדי השונות בין התלמידים</h2>
      </div>
      
      {/* Tabs */}
      <div className="flex justify-center bg-white border-b">
        <button 
          onClick={() => setActiveTab('channels')}
          className={`px-4 py-3 font-medium transition-colors duration-200 text-lg ${activeTab === 'channels' 
            ? 'text-purple-600 border-b-2 border-purple-600' 
            : 'text-gray-500 hover:text-purple-600'}`}
        >
          ערוצי למידה
        </button>
        <button 
          onClick={() => setActiveTab('conditions')}
          className={`px-4 py-3 font-medium transition-colors duration-200 text-lg ${activeTab === 'conditions' 
            ? 'text-pink-600 border-b-2 border-pink-600' 
            : 'text-gray-500 hover:text-pink-600'}`}
        >
          תנאי למידה
        </button>
        <button 
          onClick={() => setActiveTab('memory')}
          className={`px-4 py-3 font-medium transition-colors duration-200 text-lg ${activeTab === 'memory' 
            ? 'text-amber-600 border-b-2 border-amber-600' 
            : 'text-gray-500 hover:text-amber-600'}`}
        >
          זכירה ועיבוד
        </button>
      </div>
      
      {/* Content */}
      <div className="flex-grow">
        {renderContent()}
      </div>
      
      {/* Footer */}
      <div className="bg-gray-100 p-4 text-center text-gray-500 text-sm border-t">
        לחץ על הכרטיסיות השונות כדי לראות את שלושת הרבדים השונים
      </div>
    </div>
  );
};

export default LearningStylesVisual;
