(()=>{"use strict";const e=function(e){document.querySelectorAll(".active").forEach((e=>{e.className=e.className.replace("active","")})),e.target.parentElement.className+=" active",document.getElementById(e.target.href.split("#")[1]).className+=" active"};({init(){(function(){const e=document.getElementById("content"),t=document.createElement("nav"),a=document.createElement("h1");a.textContent="Restaurant 8 meals, ∞ pleasure.",e.appendChild(t),t.appendChild(a),t.className="grid grid-cols-1",a.className="place-self-center p-8 font-bold text-4xl"})(),function(){const e=document.getElementById("content"),t=document.createElement("div"),a=document.createElement("img"),n=document.createElement("div");n.setAttribute("id","tabsDiv"),a.setAttribute("src","/src/assets/imgs/restaurant.jpg"),a.setAttribute("alt","Restaurant Image"),e.appendChild(t),t.appendChild(a),t.appendChild(n),t.className="grid grid-cols-2 px-10",a.className="rounded";const s=document.createElement("ul");["Appetizers","Main Dishes","Desserts"].forEach((e=>{const t=document.createElement("li"),a=document.createElement("a");t.appendChild(a),a.innerHTML=e,t.className="button-tab p-2 text-2xl",e=e.split(" ").join(""),a.setAttribute("href",`#${e}`),s.appendChild(t)})),n.appendChild(s),s.className="flex mx-10",s.firstChild.className+=" active"}(),function(){const e=document.getElementById("tabsDiv"),t=document.createElement("div"),a=document.createElement("img"),n=document.createElement("div"),s=document.createElement("p");["Air Fryer Stuffed Mushrooms","Amazing No Cook Spinach Artichoke Dip","Classic Savory Deviled Eggs","Best Hot Crab Dip","Pecan Snack","Orange and Rosemary Baked Olives","Buffalo Chicken Meatballs","Mini Corn Muffins with Spicy Cheddar Filling"].forEach((e=>{s.innerHTML+=`- ${e};<br>`})),e.appendChild(t),t.appendChild(a),t.appendChild(n),t.setAttribute("id","Appetizers"),n.appendChild(s),t.className="mx-10 tab-pane active",s.className="font-bold text-3xl text-yellow-900 py-8",a.setAttribute("src","/src/assets/imgs/appetizers.png"),a.className="rounded"}(),function(){const e=document.getElementById("tabsDiv"),t=document.createElement("div"),a=document.createElement("img"),n=document.createElement("div"),s=document.createElement("p");["Bacon-Wrapped Pesto Pork Tenderloin","Prime Rib with Fresh Herb Sauce","Duck Breasts with Apricot Chutney","Pork Tenderloin with Three-Berry Salsa","Nana's Italian Roulade","Balsamic Roast Chicken","World's Best Lasagna","Low Carb Turkey-Stuffed Peppers"].forEach((e=>{s.innerHTML+=`- ${e};<br>`})),e.appendChild(t),t.appendChild(a),t.appendChild(n),t.setAttribute("id","MainDishes"),n.appendChild(s),t.className="mx-10 tab-pane",s.className="font-bold text-3xl text-yellow-900 py-8",a.setAttribute("src","/src/assets/imgs/mainDish.png"),a.className="w-full rounded"}(),function(){const e=document.getElementById("tabsDiv"),t=document.createElement("div"),a=document.createElement("img"),n=document.createElement("div"),s=document.createElement("p");["Cheesecake with Cranberry Glaze and Sugared Cranberries","Caramel Bars","Cranberry-Orange Bundt® Cake","Almond Milk Chocolate Pudding","Russian Honey Cake","Pumpkin Spice Latte Coffee Cake","Cranberry Apple Pie II","Sweet Spot"].forEach((e=>{s.innerHTML+=`- ${e};<br>`})),e.appendChild(t),t.appendChild(a),t.appendChild(n),t.setAttribute("id","Desserts"),n.appendChild(s),t.className="mx-10 tab-pane",s.className="font-bold text-3xl text-yellow-900 py-8",a.setAttribute("src","/src/assets/imgs/dessert.png"),a.className="w-full rounded"}(),this.eventListeners()},eventListeners(){document.getElementById("tabsDiv").firstChild.addEventListener("click",e,!1)}}).init()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvSmF2YVNjcmlwdC9tYWluQ29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvSmF2YVNjcmlwdC9vblRhYkNsaWNrLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvSmF2YVNjcmlwdC9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL0phdmFTY3JpcHQvYXBwZXRpemVycy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvSmF2YVNjcmlwdC9tYWluRGlzaGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9KYXZhU2NyaXB0L2Rlc3NlcnRzLmpzIl0sIm5hbWVzIjpbImV2ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInRhYiIsImNsYXNzTmFtZSIsInJlcGxhY2UiLCJ0YXJnZXQiLCJwYXJlbnRFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJocmVmIiwic3BsaXQiLCJjb250ZW50IiwibmF2Q29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsInRpdGxlIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsIm1haW5Db250YWluZXIiLCJyZXN0YXVyYW50SW1hZ2UiLCJ0YWJzRGl2Iiwic2V0QXR0cmlidXRlIiwidGFicyIsImVsZW1lbnQiLCJpdGVtIiwiYW5jaG9yIiwiaW5uZXJIVE1MIiwiam9pbiIsImZpcnN0Q2hpbGQiLCJhcHBldGl6ZXJzRGl2IiwiYXBwZXRpemVySW1nIiwiY29udGVudEFwcGV0aXplcnMiLCJhcHBldGl6ZXJzUGFyYWdyYXBoIiwibWFpbkRpdiIsIm1haW5EaXNoSW1nIiwiY29udGVudE1haW5EaXNoIiwibWFpbkRpc2hQYXJhZ3JhcGhzIiwiZGVzc2VydERpdiIsImRlc3NlcnRJbWciLCJjb250ZW50RGVzc2VydCIsImRlc3NlcnRQYXJhZ3JhcGhzIiwidGhpcyIsImV2ZW50TGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXQiXSwibWFwcGluZ3MiOiJtQkE4QkEsTUNyQkEsRUFUQSxTQUFvQkEsR0FDQ0MsU0FBU0MsaUJBQWlCLFdBQ2xDQyxTQUFTQyxJQUNsQkEsRUFBSUMsVUFBWUQsRUFBSUMsVUFBVUMsUUFBUSxTQUFVLE9BRWxETixFQUFNTyxPQUFPQyxjQUFjSCxXQUFhLFVBQ3hDSixTQUFTUSxlQUFlVCxFQUFNTyxPQUFPRyxLQUFLQyxNQUFNLEtBQUssSUFBSU4sV0FBYSxZQ0NyRCxDQUNqQixRQ1JGLFdBQ0UsTUFBTU8sRUFBVVgsU0FBU1EsZUFBZSxXQUNsQ0ksRUFBZVosU0FBU2EsY0FBYyxPQUN0Q0MsRUFBUWQsU0FBU2EsY0FBYyxNQUNyQ0MsRUFBTUMsWUFBYyxrQ0FDcEJKLEVBQVFLLFlBQVlKLEdBQ3BCQSxFQUFhSSxZQUFZRixHQUN6QkYsRUFBYVIsVUFBWSxtQkFDekJVLEVBQU1WLFVBQVksNENEQ2hCLEdGVEosV0FDRSxNQUFNTyxFQUFVWCxTQUFTUSxlQUFlLFdBQ2xDUyxFQUFnQmpCLFNBQVNhLGNBQWMsT0FDdkNLLEVBQWtCbEIsU0FBU2EsY0FBYyxPQUN6Q00sRUFBVW5CLFNBQVNhLGNBQWMsT0FDdkNNLEVBQVFDLGFBQWEsS0FBTSxXQUMzQkYsRUFBZ0JFLGFBQWEsTUFBTyxtQ0FDcENGLEVBQWdCRSxhQUFhLE1BQU8sb0JBQ3BDVCxFQUFRSyxZQUFZQyxHQUNwQkEsRUFBY0QsWUFBWUUsR0FDMUJELEVBQWNELFlBQVlHLEdBQzFCRixFQUFjYixVQUFZLHlCQUMxQmMsRUFBZ0JkLFVBQVksVUFDNUIsTUFBTWlCLEVBQU9yQixTQUFTYSxjQUFjLE1BQ25CLENBQUMsYUFBYyxjQUFlLFlBQ3RDWCxTQUFRb0IsSUFDZixNQUFNQyxFQUFPdkIsU0FBU2EsY0FBYyxNQUM5QlcsRUFBU3hCLFNBQVNhLGNBQWMsS0FDdENVLEVBQUtQLFlBQVlRLEdBQ2pCQSxFQUFPQyxVQUFZSCxFQUNuQkMsRUFBS25CLFVBQVksMEJBQ2pCa0IsRUFBVUEsRUFBUVosTUFBTSxLQUFLZ0IsS0FBSyxJQUNsQ0YsRUFBT0osYUFBYSxPQUFRLElBQUlFLEtBQ2hDRCxFQUFLTCxZQUFZTyxNQUVuQkosRUFBUUgsWUFBWUssR0FDcEJBLEVBQUtqQixVQUFZLGFBQ2pCaUIsRUFBS00sV0FBV3ZCLFdBQWEsVUVqQjNCLEdFVkosV0FDRSxNQUFNZSxFQUFVbkIsU0FBU1EsZUFBZSxXQUNsQ29CLEVBQWdCNUIsU0FBU2EsY0FBYyxPQUN2Q2dCLEVBQWU3QixTQUFTYSxjQUFjLE9BQ3RDaUIsRUFBb0I5QixTQUFTYSxjQUFjLE9BQzNDa0IsRUFBc0IvQixTQUFTYSxjQUFjLEtBQ2hDLENBQUMsOEJBQStCLHdDQUF5Qyw4QkFBK0Isb0JBQXFCLGNBQWUsbUNBQW9DLDRCQUE2QixnREFDck5YLFNBQVFvQixJQUNqQlMsRUFBb0JOLFdBQWEsS0FBS0gsWUFFeENILEVBQVFILFlBQVlZLEdBQ3BCQSxFQUFjWixZQUFZYSxHQUMxQkQsRUFBY1osWUFBWWMsR0FDMUJGLEVBQWNSLGFBQWEsS0FBTSxjQUNqQ1UsRUFBa0JkLFlBQVllLEdBQzlCSCxFQUFjeEIsVUFBWSx3QkFDMUIyQixFQUFvQjNCLFVBQVksMENBQ2hDeUIsRUFBYVQsYUFBYSxNQUFPLG1DQUNqQ1MsRUFBYXpCLFVBQVksVUZQdkIsR0dYSixXQUNFLE1BQU1lLEVBQVVuQixTQUFTUSxlQUFlLFdBQ2xDd0IsRUFBVWhDLFNBQVNhLGNBQWMsT0FDakNvQixFQUFjakMsU0FBU2EsY0FBYyxPQUNyQ3FCLEVBQWtCbEMsU0FBU2EsY0FBYyxPQUN6Q3NCLEVBQXFCbkMsU0FBU2EsY0FBYyxLQUMvQixDQUFDLHNDQUF1QyxrQ0FBbUMsb0NBQXFDLHlDQUEwQyx5QkFBMEIseUJBQTBCLHVCQUF3QixtQ0FDOU9YLFNBQVFvQixJQUNqQmEsRUFBbUJWLFdBQWEsS0FBS0gsWUFFdkNILEVBQVFILFlBQVlnQixHQUNwQkEsRUFBUWhCLFlBQVlpQixHQUNwQkQsRUFBUWhCLFlBQVlrQixHQUNwQkYsRUFBUVosYUFBYSxLQUFNLGNBQzNCYyxFQUFnQmxCLFlBQVltQixHQUM1QkgsRUFBUTVCLFVBQVksaUJBQ3BCK0IsRUFBbUIvQixVQUFZLDBDQUMvQjZCLEVBQVliLGFBQWEsTUFBTyxpQ0FDaENhLEVBQVk3QixVQUFZLGlCSE50QixHSVpKLFdBQ0UsTUFBTWUsRUFBVW5CLFNBQVNRLGVBQWUsV0FDbEM0QixFQUFhcEMsU0FBU2EsY0FBYyxPQUNwQ3dCLEVBQWFyQyxTQUFTYSxjQUFjLE9BQ3BDeUIsRUFBaUJ0QyxTQUFTYSxjQUFjLE9BQ3hDMEIsRUFBb0J2QyxTQUFTYSxjQUFjLEtBQ2hDLENBQUMsMERBQTJELGVBQWdCLCtCQUFnQyxnQ0FBaUMscUJBQXNCLGtDQUFtQyx5QkFBMEIsY0FDeE9YLFNBQVFvQixJQUNmaUIsRUFBa0JkLFdBQWEsS0FBS0gsWUFFdENILEVBQVFILFlBQVlvQixHQUNwQkEsRUFBV3BCLFlBQVlxQixHQUN2QkQsRUFBV3BCLFlBQVlzQixHQUN2QkYsRUFBV2hCLGFBQWEsS0FBTSxZQUM5QmtCLEVBQWV0QixZQUFZdUIsR0FDM0JILEVBQVdoQyxVQUFZLGlCQUN2Qm1DLEVBQWtCbkMsVUFBWSwwQ0FDOUJpQyxFQUFXakIsYUFBYSxNQUFPLGdDQUMvQmlCLEVBQVdqQyxVQUFZLGlCSkxyQixHQUNBb0MsS0FBS0Msa0JBRVAsaUJBQ2V6QyxTQUFTUSxlQUFlLFdBQ2hDbUIsV0FBV2UsaUJBQWlCLFFBQVMsR0FBWSxNQUkvQ0MsUSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbWFpbkNvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHJlc3RhdXJhbnRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCB0YWJzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhYnNEaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0YWJzRGl2Jyk7XG4gIHJlc3RhdXJhbnRJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcvc3JjL2Fzc2V0cy9pbWdzL3Jlc3RhdXJhbnQuanBnJyk7XG4gIHJlc3RhdXJhbnRJbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdSZXN0YXVyYW50IEltYWdlJyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudEltYWdlKTtcbiAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJzRGl2KTtcbiAgbWFpbkNvbnRhaW5lci5jbGFzc05hbWUgPSAnZ3JpZCBncmlkLWNvbHMtMiBweC0xMCc7XG4gIHJlc3RhdXJhbnRJbWFnZS5jbGFzc05hbWUgPSAncm91bmRlZCc7XG4gIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBjb25zdCB0YWJzTWVudSA9IFsnQXBwZXRpemVycycsICdNYWluIERpc2hlcycsICdEZXNzZXJ0cyddO1xuICB0YWJzTWVudS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGFuY2hvcik7XG4gICAgYW5jaG9yLmlubmVySFRNTCA9IGVsZW1lbnQ7XG4gICAgaXRlbS5jbGFzc05hbWUgPSAnYnV0dG9uLXRhYiBwLTIgdGV4dC0yeGwnO1xuICAgIGVsZW1lbnQgPSBlbGVtZW50LnNwbGl0KCcgJykuam9pbignJyk7XG4gICAgYW5jaG9yLnNldEF0dHJpYnV0ZSgnaHJlZicsIGAjJHtlbGVtZW50fWApO1xuICAgIHRhYnMuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gIH0pO1xuICB0YWJzRGl2LmFwcGVuZENoaWxkKHRhYnMpO1xuICB0YWJzLmNsYXNzTmFtZSA9ICdmbGV4IG14LTEwJztcbiAgdGFicy5maXJzdENoaWxkLmNsYXNzTmFtZSArPSAnIGFjdGl2ZSc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1haW5Db250ZW50O1xuIiwiZnVuY3Rpb24gb25UYWJDbGljayhldmVudCkge1xuICBjb25zdCBhY3RpdmVUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjdGl2ZScpO1xuICBhY3RpdmVUYWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgIHRhYi5jbGFzc05hbWUgPSB0YWIuY2xhc3NOYW1lLnJlcGxhY2UoJ2FjdGl2ZScsICcnKTtcbiAgfSk7XG4gIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSArPSAnIGFjdGl2ZSc7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGV2ZW50LnRhcmdldC5ocmVmLnNwbGl0KCcjJylbMV0pLmNsYXNzTmFtZSArPSAnIGFjdGl2ZSc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9uVGFiQ2xpY2s7IiwiaW1wb3J0IG1haW5Db250ZW50IGZyb20gJy4vSmF2YVNjcmlwdC9tYWluQ29udGVudCc7XG5pbXBvcnQgbmF2YmFyIGZyb20gJy4vSmF2YVNjcmlwdC9uYXZiYXInO1xuaW1wb3J0IGFwcGV0aXplcnMgZnJvbSAnLi9KYXZhU2NyaXB0L2FwcGV0aXplcnMnO1xuaW1wb3J0IG1haW5EaXNoZXMgZnJvbSAnLi9KYXZhU2NyaXB0L21haW5EaXNoZXMnO1xuaW1wb3J0IGRlc3NlcnRzIGZyb20gJy4vSmF2YVNjcmlwdC9kZXNzZXJ0cyc7XG5pbXBvcnQgb25UYWJDbGljayBmcm9tICcuL0phdmFTY3JpcHQvb25UYWJDbGljayc7XG5cbmNvbnN0IHJlc3RhdXJhbnQgPSB7XG4gIGluaXQoKSB7XG4gICAgbmF2YmFyKCk7XG4gICAgbWFpbkNvbnRlbnQoKTtcbiAgICBhcHBldGl6ZXJzKCk7XG4gICAgbWFpbkRpc2hlcygpO1xuICAgIGRlc3NlcnRzKCk7XG4gICAgdGhpcy5ldmVudExpc3RlbmVycygpO1xuICB9LFxuICBldmVudExpc3RlbmVycygpIHtcbiAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYnNEaXYnKTtcbiAgICB0YWJzLmZpcnN0Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvblRhYkNsaWNrLCBmYWxzZSk7XG4gIH0sXG59O1xuXG5yZXN0YXVyYW50LmluaXQoKTtcbiIsImZ1bmN0aW9uIG5hdmJhcigpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IG5hdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ1Jlc3RhdXJhbnQgOCBtZWFscywg4oieIHBsZWFzdXJlLic7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2Q29udGFpbmVyKTtcbiAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgbmF2Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdncmlkIGdyaWQtY29scy0xJztcbiAgdGl0bGUuY2xhc3NOYW1lID0gJ3BsYWNlLXNlbGYtY2VudGVyIHAtOCBmb250LWJvbGQgdGV4dC00eGwnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBuYXZiYXI7IiwiZnVuY3Rpb24gYXBwZXRpemVycygpIHtcbiAgY29uc3QgdGFic0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJzRGl2Jyk7XG4gIGNvbnN0IGFwcGV0aXplcnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgYXBwZXRpemVySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IGNvbnRlbnRBcHBldGl6ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGFwcGV0aXplcnNQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGFwcGV0aXplcnMgPSBbJ0FpciBGcnllciBTdHVmZmVkIE11c2hyb29tcycsICdBbWF6aW5nIE5vIENvb2sgU3BpbmFjaCBBcnRpY2hva2UgRGlwJywgJ0NsYXNzaWMgU2F2b3J5IERldmlsZWQgRWdncycsICdCZXN0IEhvdCBDcmFiIERpcCcsICdQZWNhbiBTbmFjaycsICdPcmFuZ2UgYW5kIFJvc2VtYXJ5IEJha2VkIE9saXZlcycsICdCdWZmYWxvIENoaWNrZW4gTWVhdGJhbGxzJywgJ01pbmkgQ29ybiBNdWZmaW5zIHdpdGggU3BpY3kgQ2hlZGRhciBGaWxsaW5nJ107XG4gIGFwcGV0aXplcnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBhcHBldGl6ZXJzUGFyYWdyYXBoLmlubmVySFRNTCArPSBgLSAke2VsZW1lbnR9Ozxicj5gO1xuICB9KTtcbiAgdGFic0Rpdi5hcHBlbmRDaGlsZChhcHBldGl6ZXJzRGl2KTtcbiAgYXBwZXRpemVyc0Rpdi5hcHBlbmRDaGlsZChhcHBldGl6ZXJJbWcpO1xuICBhcHBldGl6ZXJzRGl2LmFwcGVuZENoaWxkKGNvbnRlbnRBcHBldGl6ZXJzKTtcbiAgYXBwZXRpemVyc0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ0FwcGV0aXplcnMnKTtcbiAgY29udGVudEFwcGV0aXplcnMuYXBwZW5kQ2hpbGQoYXBwZXRpemVyc1BhcmFncmFwaCk7XG4gIGFwcGV0aXplcnNEaXYuY2xhc3NOYW1lID0gJ214LTEwIHRhYi1wYW5lIGFjdGl2ZSc7XG4gIGFwcGV0aXplcnNQYXJhZ3JhcGguY2xhc3NOYW1lID0gJ2ZvbnQtYm9sZCB0ZXh0LTN4bCB0ZXh0LXllbGxvdy05MDAgcHktOCc7XG4gIGFwcGV0aXplckltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsICcvc3JjL2Fzc2V0cy9pbWdzL2FwcGV0aXplcnMucG5nJyk7XG4gIGFwcGV0aXplckltZy5jbGFzc05hbWUgPSAncm91bmRlZCc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwcGV0aXplcnM7IiwiZnVuY3Rpb24gbWFpbkRpc2hlcygpIHtcbiAgY29uc3QgdGFic0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJzRGl2Jyk7XG4gIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbWFpbkRpc2hJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgY29udGVudE1haW5EaXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG1haW5EaXNoUGFyYWdyYXBocyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgbWFpbkRpc2hlcyA9IFsnQmFjb24tV3JhcHBlZCBQZXN0byBQb3JrIFRlbmRlcmxvaW4nLCAnUHJpbWUgUmliIHdpdGggRnJlc2ggSGVyYiBTYXVjZScsICdEdWNrIEJyZWFzdHMgd2l0aCBBcHJpY290IENodXRuZXknLCAnUG9yayBUZW5kZXJsb2luIHdpdGggVGhyZWUtQmVycnkgU2Fsc2EnLCBcIk5hbmEncyBJdGFsaWFuIFJvdWxhZGVcIiwgJ0JhbHNhbWljIFJvYXN0IENoaWNrZW4nLCBcIldvcmxkJ3MgQmVzdCBMYXNhZ25hXCIsICdMb3cgQ2FyYiBUdXJrZXktU3R1ZmZlZCBQZXBwZXJzJ107XG4gIG1haW5EaXNoZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBtYWluRGlzaFBhcmFncmFwaHMuaW5uZXJIVE1MICs9IGAtICR7ZWxlbWVudH07PGJyPmA7XG4gIH0pO1xuICB0YWJzRGl2LmFwcGVuZENoaWxkKG1haW5EaXYpO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKG1haW5EaXNoSW1nKTtcbiAgbWFpbkRpdi5hcHBlbmRDaGlsZChjb250ZW50TWFpbkRpc2gpO1xuICBtYWluRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnTWFpbkRpc2hlcycpO1xuICBjb250ZW50TWFpbkRpc2guYXBwZW5kQ2hpbGQobWFpbkRpc2hQYXJhZ3JhcGhzKTtcbiAgbWFpbkRpdi5jbGFzc05hbWUgPSAnbXgtMTAgdGFiLXBhbmUnO1xuICBtYWluRGlzaFBhcmFncmFwaHMuY2xhc3NOYW1lID0gJ2ZvbnQtYm9sZCB0ZXh0LTN4bCB0ZXh0LXllbGxvdy05MDAgcHktOCc7XG4gIG1haW5EaXNoSW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgJy9zcmMvYXNzZXRzL2ltZ3MvbWFpbkRpc2gucG5nJyk7XG4gIG1haW5EaXNoSW1nLmNsYXNzTmFtZSA9ICd3LWZ1bGwgcm91bmRlZCc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1haW5EaXNoZXM7IiwiZnVuY3Rpb24gZGVzc2VydHMoKSB7XG4gIGNvbnN0IHRhYnNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFic0RpdicpO1xuICBjb25zdCBkZXNzZXJ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGRlc3NlcnRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgY29udGVudERlc3NlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZGVzc2VydFBhcmFncmFwaHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGRlc3NlcnRzID0gWydDaGVlc2VjYWtlIHdpdGggQ3JhbmJlcnJ5IEdsYXplIGFuZCBTdWdhcmVkIENyYW5iZXJyaWVzJywgJ0NhcmFtZWwgQmFycycsICdDcmFuYmVycnktT3JhbmdlIEJ1bmR0wq4gQ2FrZScsICdBbG1vbmQgTWlsayBDaG9jb2xhdGUgUHVkZGluZycsICdSdXNzaWFuIEhvbmV5IENha2UnLCAnUHVtcGtpbiBTcGljZSBMYXR0ZSBDb2ZmZWUgQ2FrZScsICdDcmFuYmVycnkgQXBwbGUgUGllIElJJywgJ1N3ZWV0IFNwb3QnXTtcbiAgZGVzc2VydHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBkZXNzZXJ0UGFyYWdyYXBocy5pbm5lckhUTUwgKz0gYC0gJHtlbGVtZW50fTs8YnI+YDtcbiAgfSk7XG4gIHRhYnNEaXYuYXBwZW5kQ2hpbGQoZGVzc2VydERpdik7XG4gIGRlc3NlcnREaXYuYXBwZW5kQ2hpbGQoZGVzc2VydEltZyk7XG4gIGRlc3NlcnREaXYuYXBwZW5kQ2hpbGQoY29udGVudERlc3NlcnQpO1xuICBkZXNzZXJ0RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnRGVzc2VydHMnKTtcbiAgY29udGVudERlc3NlcnQuYXBwZW5kQ2hpbGQoZGVzc2VydFBhcmFncmFwaHMpO1xuICBkZXNzZXJ0RGl2LmNsYXNzTmFtZSA9ICdteC0xMCB0YWItcGFuZSc7XG4gIGRlc3NlcnRQYXJhZ3JhcGhzLmNsYXNzTmFtZSA9ICdmb250LWJvbGQgdGV4dC0zeGwgdGV4dC15ZWxsb3ctOTAwIHB5LTgnO1xuICBkZXNzZXJ0SW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgJy9zcmMvYXNzZXRzL2ltZ3MvZGVzc2VydC5wbmcnKTtcbiAgZGVzc2VydEltZy5jbGFzc05hbWUgPSAndy1mdWxsIHJvdW5kZWQnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZXNzZXJ0czsiXSwic291cmNlUm9vdCI6IiJ9