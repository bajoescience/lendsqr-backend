"use strict";(self.webpackChunklensqr_test=self.webpackChunklensqr_test||[]).push([[233],{233:(A,t,e)=>{e.r(t),e.d(t,{default:()=>g});var s=e(654),a=e(43),l=e(216),n=e(579);const c=[{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGQSURBVHgB3VJRTsJAEJ3ZVv3RWG9QbyAnEG9QIiR+GCknkE9jUBeCiX/gAQzFX0F6A+AEeoRygxoTP4TtOLOAEaMH0CbNZmffvH3vzQL8+Q+/F47CM3+WuWVEDAnAlxqvCS8jg9N6HN0kvxKUTi5PCUlLmSjr8mHKzR7Kj2qfgHwg1L37Rn2FIAir3hptdRgcMMGtAjciMi0+yi8VKDQFAhUwwRU3xVN8rcRRO1UCcGlzSIB5QDroR80qkBnw3meygtSUVeS0elFTS02w0mMVFMsXclMV0ck9RPq5FJ7vMfhJGrlhJKDD41qADg4yd8N/vKtNSqFmTDZkaayW6IUxKcC79eTAerqQ7X3xaWuOeduZVwRLHqnMwyDUnitsHBDLq7CFmFUNZQJoqCJEysFWxjT9bmN3oabDtEmv28gtQtQcorEhSsqgsjGS6tjU53LGqEyVrZWtXRuiwyHqdGWMxbCmJeXl3MWelY+4zfvQmkFT70XX7R/fwfwhaX5IM/05d6uAJqAgmvF4+dYE/tf3AZBKwNvWhWm1AAAAAElFTkSuQmCC",title:"View Details"},{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF7SURBVHgBfVKxTgJBEJ2ZPaOdV1jYSaclWNrIH0hBYaEGvoArLTAQsVe+wEMbC2LgC8DYWIKFNZYmFmdnwrHjuwvIHTl9yV12Z+ftm3k7TCson9SLbLimRK611Hm8b/mUAUlujivnOTI8UCUm1XcRui2fXnhZRCe5melag5T63btWKVY/q09UuIblzb+KqsoMrWWAA4J4FlLRcqVeRPIATJ8tjXFtg5jbKCXAegcp+UXfKcWufzWEYhWaBWL18LW7/mUTpYxw7MVEY4ZRrkkSSxXPNTNnT0XWoTRRy+Pd/YOASSrEss3EG2LDj7fX5xcn6SjMGcAMl1WfYgOEGwzDWKgdkhQ28ETfRoJfVxckLEchS7XXaQaJvlEqXzscjh7QSsrVqXU8C5+mbKo9f0ma9x312AG5QavPwSyHrLazSkpk+fgXIw/SRFLXqp3QH3DIic/EbG0uY3MYMUeYlFwWcWpDN5qM9GWAVe3D6jy0i1nEmIJRtLPPr0XsB7Mhl9TRmhkEAAAAAElFTkSuQmCC",title:"Blacklist User"},{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGISURBVHgBhVLBTgJBDG1nFm8GPgEvXrzIFwhfAAZIjCGw/gHeDAEB4eANPHpiSTxggrB8AegPKBev8gkcVXandlBwWUCbNO3M9LWv7SBskFSmGAWJ8fnBpUH3rj7yx4g1ULZYBin6RIRaUYpWKntZ9seh93BiXoRntDN0UcRsqzL5vquEHVLPgOq4a/1WXqnoKMPkMuMFSEtH+6QGTPlwO1XCKXMIgp8WYvDPHg0pbTbRtFlYZtc+ASQcGbC39qgllSs12ORZRz9XUdZmt1073whMmPlQgHZbBBgl7gkFvswfFPeGIk5Atouzqm1dT5ZAPU2XAkNewKMDRp6HM/Vmn09WORUQYmLAp/W+AKZzpZZi+9CuncE/wrFvhHAjdDXF9FyU1bWg08LKCvTn4FjoWrWm0LvjPYy8u1sIBWQjyWy0n8wUE4TC1J9j3iNnqXCSOBAM/EBHGE2D1JAnxCEYchGqPatm6Tf5On4aHUSOPohA0wp5FPrtK3s/ErtHUnsk4LZn1TuLpF9XC6az+BXIaAAAAABJRU5ErkJggg==",title:"Activate User"}],g=A=>{let{user:t,setanchor_id:e,updateChangedUser:g}=A;const i=(0,l.Zp)();(0,a.useEffect)((()=>{t||(document.getElementById("statusCard").style.left=s.$C.left)}),[t]);const r=A=>async a=>{if(!t)return;const l=await(0,s.Wk)(A,t);console.log(l),g(l),e(null)};return(0,n.jsx)("div",{className:"status-change-con",id:"statusCard",children:c.map((A=>(0,n.jsxs)("div",{onClick:"View Details"===A.title?A=>{i("/dashboard/userdetails/".concat(t)),e(null)}:"Blacklist User"===A.title?r("Blacklisted"):r("Active"),children:[(0,n.jsx)("img",{src:A.src,alt:A.title}),(0,n.jsx)("span",{children:A.title})]},A.title)))})}}}]);
//# sourceMappingURL=233.c98a180e.chunk.js.map