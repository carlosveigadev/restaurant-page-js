(()=>{"use strict";({init(){!function(){const e=document.getElementById("content"),t=document.createElement("nav"),n=document.createElement("h1");n.textContent="Restaurant",e.appendChild(t),t.appendChild(n),t.className="grid grid-cols-1",n.className="place-self-center p-8 font-bold"}(),function(){const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("img"),a=document.createElement("div");a.setAttribute("id","tabsDiv"),n.setAttribute("src","/src/assets/imgs/restaurant.jpg"),n.setAttribute("alt","Restaurant Image"),e.appendChild(t),t.appendChild(n),t.appendChild(a),t.className="grid grid-cols-2 px-10",n.className="rounded";const s=document.createElement("ul");["Appetizers","Main Dishes","Deserts"].forEach((e=>{var t=document.createElement("li");t.innerHTML=e,t.className="button-tab mx-2",s.appendChild(t)})),a.appendChild(s),s.className="flex"}(),this.eventListeners()},eventListeners(){!function(){const e=document.getElementById("tabsDiv"),t=document.createElement("div"),n=document.createElement("img"),a=document.createElement("div"),s=document.createElement("p");["Air Fryer Stuffed Mushrooms","Amazing No Cook Spinach Artichoke Dip","Classic Savory Deviled Eggs","Best Hot Crab Dip","Pecan Snack","Orange and Rosemary Baked Olives"].forEach((e=>{s.innerHTML+="- "+e+";<br>"})),e.appendChild(t),t.appendChild(n),t.appendChild(a),a.appendChild(s),t.className="m-10",s.className="font-bold text-lg text-yellow-900",n.setAttribute("src","/src/assets/imgs/appetizers.png"),n.className="rounded"}()}}).init()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL0phdmFTY3JpcHQvbmF2YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9KYXZhU2NyaXB0L21haW5Db250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9KYXZhU2NyaXB0L2FwcGV0aXplcnMuanMiXSwibmFtZXMiOlsiY29udGVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJuYXZDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwidGl0bGUiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwiY2xhc3NOYW1lIiwibmF2YmFyIiwibWFpbkNvbnRhaW5lciIsInJlc3RhdXJhbnRJbWFnZSIsInRhYnNEaXYiLCJzZXRBdHRyaWJ1dGUiLCJ0YWJzIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpdGVtIiwiaW5uZXJIVE1MIiwibWFpbkNvbnRlbnQiLCJ0aGlzIiwiZXZlbnRMaXN0ZW5lcnMiLCJhcHBldGl6ZXJzRGl2IiwiYXBwZXRpemVySW1nIiwiY29udGVudEFwcGV0aXplcnMiLCJhcHBldGl6ZXJzUGFyYWdyYXBoIiwiYXBwZXRpemVycyIsImluaXQiXSwibWFwcGluZ3MiOiJvQkFLbUIsQ0FDakIsUUNOSyxXQUNMLE1BQU1BLEVBQVVDLFNBQVNDLGVBQWUsV0FDbENDLEVBQWVGLFNBQVNHLGNBQWMsT0FDdENDLEVBQVFKLFNBQVNHLGNBQWMsTUFDckNDLEVBQU1DLFlBQWMsYUFDcEJOLEVBQVFPLFlBQVlKLEdBQ3BCQSxFQUFhSSxZQUFZRixHQUN6QkYsRUFBYUssVUFBWSxtQkFDekJILEVBQU1HLFVBQVksa0NERGhCQyxHRU5HLFdBQ0wsTUFBTVQsRUFBVUMsU0FBU0MsZUFBZSxXQUNsQ1EsRUFBZ0JULFNBQVNHLGNBQWMsT0FDdkNPLEVBQWtCVixTQUFTRyxjQUFjLE9BQ3pDUSxFQUFVWCxTQUFTRyxjQUFjLE9BQ3ZDUSxFQUFRQyxhQUFhLEtBQU0sV0FDM0JGLEVBQWdCRSxhQUFhLE1BQU8sbUNBQ3BDRixFQUFnQkUsYUFBYSxNQUFPLG9CQUNwQ2IsRUFBUU8sWUFBWUcsR0FDcEJBLEVBQWNILFlBQVlJLEdBQzFCRCxFQUFjSCxZQUFZSyxHQUMxQkYsRUFBY0YsVUFBWSx5QkFDMUJHLEVBQWdCSCxVQUFZLFVBQzVCLE1BQU1NLEVBQU9iLFNBQVNHLGNBQWMsTUFDbkIsQ0FBQyxhQUFjLGNBQWUsV0FDdENXLFNBQVFDLElBQ2YsSUFBSUMsRUFBT2hCLFNBQVNHLGNBQWMsTUFDbENhLEVBQUtDLFVBQVlGLEVBQ2pCQyxFQUFLVCxVQUFZLGtCQUNqQk0sRUFBS1AsWUFBWVUsTUFFbkJMLEVBQVFMLFlBQVlPLEdBQ3BCQSxFQUFLTixVQUFZLE9GZmZXLEdBQ0FDLEtBQUtDLGtCQUVQLGtCR1hLLFdBQ0wsTUFBTVQsRUFBVVgsU0FBU0MsZUFBZSxXQUNsQ29CLEVBQWdCckIsU0FBU0csY0FBYyxPQUN2Q21CLEVBQWV0QixTQUFTRyxjQUFjLE9BQ3RDb0IsRUFBb0J2QixTQUFTRyxjQUFjLE9BQzNDcUIsRUFBc0J4QixTQUFTRyxjQUFjLEtBQ2hDLENBQUMsOEJBQStCLHdDQUF5Qyw4QkFBK0Isb0JBQXFCLGNBQWUsb0NBQ3BKVyxTQUFRQyxJQUNqQlMsRUFBb0JQLFdBQWEsS0FBWUYsRUFBVSxXQUV6REosRUFBUUwsWUFBWWUsR0FDcEJBLEVBQWNmLFlBQVlnQixHQUMxQkQsRUFBY2YsWUFBWWlCLEdBQzFCQSxFQUFrQmpCLFlBQVlrQixHQUM5QkgsRUFBY2QsVUFBWSxPQUMxQmlCLEVBQW9CakIsVUFBWSxvQ0FDaENlLEVBQWFWLGFBQWEsTUFBTyxtQ0FDakNVLEVBQWFmLFVBQVksVUhMdkJrQixNQUtPQyxRIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWluQ29udGVudCB9IGZyb20gJy4vSmF2YVNjcmlwdC9tYWluQ29udGVudC5qcyc7XG5pbXBvcnQgeyBuYXZiYXIgfSBmcm9tICcuL0phdmFTY3JpcHQvbmF2YmFyLmpzJztcbmltcG9ydCB7IGFwcGV0aXplcnMgfSBmcm9tICcuL0phdmFTY3JpcHQvYXBwZXRpemVycy5qcyc7XG5cblxuY29uc3QgcmVzdGF1cmFudCA9IHtcbiAgaW5pdCgpIHtcbiAgICBuYXZiYXIoKTtcbiAgICBtYWluQ29udGVudCgpO1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMoKTtcbiAgfSxcbiAgZXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgYXBwZXRpemVycygpO1xuXG4gIH0sXG59XG5cbnJlc3RhdXJhbnQuaW5pdCgpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIG5hdmJhcigpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IG5hdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJSZXN0YXVyYW50XCI7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2Q29udGFpbmVyKTtcbiAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgbmF2Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZ3JpZCBncmlkLWNvbHMtMVwiO1xuICB0aXRsZS5jbGFzc05hbWUgPSBcInBsYWNlLXNlbGYtY2VudGVyIHAtOCBmb250LWJvbGRcIjtcbn07XG4iLCIvLyBpbXBvcnQgdGFic0RpdlxuZXhwb3J0IGZ1bmN0aW9uIG1haW5Db250ZW50KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCByZXN0YXVyYW50SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgdGFic0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YWJzRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAndGFic0RpdicpO1xuICByZXN0YXVyYW50SW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCAnL3NyYy9hc3NldHMvaW1ncy9yZXN0YXVyYW50LmpwZycpO1xuICByZXN0YXVyYW50SW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCAnUmVzdGF1cmFudCBJbWFnZScpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRJbWFnZSk7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGFic0Rpdik7XG4gIG1haW5Db250YWluZXIuY2xhc3NOYW1lID0gJ2dyaWQgZ3JpZC1jb2xzLTIgcHgtMTAnO1xuICByZXN0YXVyYW50SW1hZ2UuY2xhc3NOYW1lID0gJ3JvdW5kZWQnXG4gIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBjb25zdCB0YWJzTWVudSA9IFsnQXBwZXRpemVycycsICdNYWluIERpc2hlcycsICdEZXNlcnRzJ107XG4gIHRhYnNNZW51LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgdmFyIGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGl0ZW0uaW5uZXJIVE1MID0gZWxlbWVudDtcbiAgICBpdGVtLmNsYXNzTmFtZSA9ICdidXR0b24tdGFiIG14LTInO1xuICAgIHRhYnMuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gIH0pXG4gIHRhYnNEaXYuYXBwZW5kQ2hpbGQodGFicyk7XG4gIHRhYnMuY2xhc3NOYW1lID0gJ2ZsZXgnXG4gIC8vIHRhYnNEaXZcbiAgXG4gIC8vIHRpdGxlLnRleHRDb250ZW50ID0gXCJSZXN0YXVyYW50XCI7XG4gIC8vIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2Q29udGFpbmVyKTtcbiAgLy8gbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgLy8gbmF2Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZ3JpZCBncmlkLWNvbHMtMVwiO1xuICAvLyB0aXRsZS5jbGFzc05hbWUgPSBcInBsYWNlLXNlbGYtY2VudGVyIHAtOCBmb250LWJvbGRcIjtcblxufTtcbiIsImV4cG9ydCBmdW5jdGlvbiBhcHBldGl6ZXJzKCkge1xuICBjb25zdCB0YWJzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYnNEaXYnKTtcbiAgY29uc3QgYXBwZXRpemVyc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBhcHBldGl6ZXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgY29udGVudEFwcGV0aXplcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgYXBwZXRpemVyc1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgYXBwZXRpemVycyA9IFsnQWlyIEZyeWVyIFN0dWZmZWQgTXVzaHJvb21zJywgJ0FtYXppbmcgTm8gQ29vayBTcGluYWNoIEFydGljaG9rZSBEaXAnLCAnQ2xhc3NpYyBTYXZvcnkgRGV2aWxlZCBFZ2dzJywgJ0Jlc3QgSG90IENyYWIgRGlwJywgJ1BlY2FuIFNuYWNrJywgJ09yYW5nZSBhbmQgUm9zZW1hcnkgQmFrZWQgT2xpdmVzJ107XG4gIGFwcGV0aXplcnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBhcHBldGl6ZXJzUGFyYWdyYXBoLmlubmVySFRNTCArPSBcIi1cIiArIFwiIFwiICsgZWxlbWVudCArIFwiOzxicj5cIjtcbiAgfSk7XG4gIHRhYnNEaXYuYXBwZW5kQ2hpbGQoYXBwZXRpemVyc0Rpdik7XG4gIGFwcGV0aXplcnNEaXYuYXBwZW5kQ2hpbGQoYXBwZXRpemVySW1nKTtcbiAgYXBwZXRpemVyc0Rpdi5hcHBlbmRDaGlsZChjb250ZW50QXBwZXRpemVycyk7XG4gIGNvbnRlbnRBcHBldGl6ZXJzLmFwcGVuZENoaWxkKGFwcGV0aXplcnNQYXJhZ3JhcGgpO1xuICBhcHBldGl6ZXJzRGl2LmNsYXNzTmFtZSA9ICdtLTEwJztcbiAgYXBwZXRpemVyc1BhcmFncmFwaC5jbGFzc05hbWUgPSAnZm9udC1ib2xkIHRleHQtbGcgdGV4dC15ZWxsb3ctOTAwJztcbiAgYXBwZXRpemVySW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgJy9zcmMvYXNzZXRzL2ltZ3MvYXBwZXRpemVycy5wbmcnKTtcbiAgYXBwZXRpemVySW1nLmNsYXNzTmFtZSA9ICdyb3VuZGVkJ1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=