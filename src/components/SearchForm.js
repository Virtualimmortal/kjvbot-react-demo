
import $ from 'jquery'
import kjvBot from '../kjvbot'


const SearchForm = () => {
   var timer = {};
   return (
      <div className="SearchForm">
         <div className="container">
            <div className="row center">
               <h3><i className="fa fa-search"></i> Bible Search</h3>

               <div className="form-group">
                     <input 
                     id="kjvBot" 
                     name="kjvBot"
                     className="form-control"
                     type="text" 
                     defaultValue="" 
                     placeholder="Search" 
                     onKeyUp={(e) => ((e.currentTarget.value.length > 3) || ((e.key === 'Enter') && (e.currentTarget.value.length > 1))) ? SearchForm.updateSearch(e.currentTarget.value) : {}}
                     />
               </div>

               <div id="count"></div>

            </div>

            <div id="results" className="row"></div>
         </div>

         <div id="floatingActionMenu" className="fixed-action-btn">
            <a className="btn-floating btn-large grey darken-3">
               <i className="fa fa-bars"></i>
            </a>
            <ul>
               <li>
                  <a 
                  title="Open kjvBot code page on github"
                  href="https://github.com/Virtualimmortal/kjvBot/tree/master" 
                  target="_blank" 
                  className="btn-floating grey darken-5"
                  >
                     <i className="fa fa-code"></i>
                  </a>
               </li>
               <li>
                  <a 
                  title="Search icons" 
                  href="#!" 
                  className="btn-floating blue searchBtn"
                  >
                     <i className="fa fa-search"></i>
                  </a>
               </li>
               <li>
                  <a 
                  title="Scroll to the top of the page" 
                  href="#!" 
                  className="btn-floating green toTopBtn"
                  >
                     <i className="fa fa-arrow-to-top"></i>
                  </a>
               </li>
               <li>
                  <a 
                  title="Scroll to the bottom of the page" 
                  href="#!" 
                  className="btn-floating green toBottomBtn"
                  >
                     <i className="fa fa-arrow-to-bottom"></i>
                  </a>
               </li>
           </ul>
         </div>
      
      </div>
   )
}

SearchForm.updateSearch = function(text)
{
   clearTimeout(this.timer);
   var term = text.toLowerCase();
   this.timer = setTimeout(function()
   { 
         kjvBot.search(term); 
   }, 500);

};


export default SearchForm
