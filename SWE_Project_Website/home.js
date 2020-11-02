
document.write(' <div class="sidenav"> ');

    document.write(' <a href="about.html">About MacroBuddy</a> '); //project Background & Description
    document.write(' <a href="group.html">Group Contacts</a> ');
    document.write(' <a href="research.html">Research</a> ');
    document.write(' <a href="prototype.html">Prototype</a> ');
    document.write(' <a href="presentation.html">Presentation</a> ');
    document.write(' <a href="srs.html">SRS</a> ');
    document.write(' <a href="demo.html">Demo</a> ');

    document.write('<button class="dropdown-btn">Intermediate Assignmnets');
        document.write('<i class="fa fa-caret-down"></i>');
    document.write('</button>');
    document.write('<div class="dropdown-container">');
        document.write('<a href="useCase.html">Use Cases</a>');
        document.write('<a href="req.html">Requirements</a>');
        document.write('<a href="classDiagram.html">Class Diagram</a>');
        document.write('<a href="sequenceDiagram.html">Sequence Diagrams</a>');
    document.write('</div>');

    document.write(' <a href="agenda.html">Agenda</a> '); //minutes
    document.write(' <a href="orig_descr.html">Original Description</a> ');
document.write(' </div> ');

var dropdown = document.getElementsByClassName("dropdown-btn");

var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}



    
  
  
    
    
    
  