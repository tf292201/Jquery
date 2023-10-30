
const input1 = $("<input>").attr("type", "text").attr("placeholder", "Movie Title");
const input2 = $("<input>").attr("type", "text").attr("placeholder", "Rating");
const submitBtn = $("<button>").text("Submit");
const table = $("<table>");

const sortAlpha = $("<button>").text("Sort Alphabetically");
const sortRating = $("<button>").text("Sort by Rating");

const form = $("<form>").attr("id", "myForm");

form.append(input1, input2, submitBtn, sortAlpha, sortRating);
$("body").append(form);


form.on("submit", function(event) {
  event.preventDefault(); 
  const input1Value = input1.val();
  const input2Value = input2.val();

if (input1.val().length < 2) {
  alert("Please enter a movie title");
  return;
}

if (!(input2.val() >= 0 && input2.val() <= 10)) {
  alert("Please enter a number between 0 and 10");
  return;
}

  
  const row = $("<tr>");
  const cell1 = $("<td>").attr("id", "movies").text(input1Value);
  const cell2 = $("<td>").attr("id", "ratings").text(input2Value);
  const deleteBtn = $("<button>").text("X");
  const deleteBtn2 = $("<button>").text("X");

  deleteBtn.on("click", function() {
    $(this).closest("td").remove();
  });
 
  deleteBtn2.on("click", function() {
    $(this).closest("td").remove();
  });

  row.append(cell1)
    cell1.append(deleteBtn2);
      row.append(cell2)
        cell2.append(deleteBtn);
  table.append(row);
  $("body").append(table);
  input1.val("");
  input2.val("");

});



sortAlpha.on("click", function() {

 

  const rows = table.find("tr").get();

  rows.sort(function(a, b) {
    const textA = $(a).find("td:nth-child(2)").text().toUpperCase();
    const textB = $(b).find("td:nth-child(2)").text().toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });

  // Append the sorted rows back to the table
  $.each(rows, function(_, row) {
    table.append(row);
  });
});
