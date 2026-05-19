var completeCount = 0;
      let count = 0;
      function getInput() {
        let div = document.querySelector("#user-task");
        let userInput = div.value;
        addTask(userInput);
      }
      function addTask(userInput) {
        let div = document.querySelector(".onGoing");
        div.insertAdjacentHTML(
          "beforeend",
          `<div class="view-task">
                  <p class="user-task">
                    <input type="checkbox" name="" id="Tasks" />${userInput}
                  </p>
                  <img src="icons/delete-02-stroke-rounded.svg" alt="delete icon" class = "delete-btn"/>
                </div>`,
        );
        count++;
        let arr = count;
        document.querySelector(".task-count").innerHTML = `${count} Task Left`;
        document.querySelector("footer .task-count").innerHTML =
          `${count} Task Remaining`;
      }
      document
        .querySelector(".onGoing")
        .addEventListener("click", function (event) {
          if (event.target.classList.contains("delete-btn")) {
            event.target.parentElement.remove();
            count--;

            document.querySelector(".task-count").innerHTML =
              `${count} Task Left`;

            document.querySelector("footer .task-count").innerHTML =
              `${count} Task Remaining`;
            //document.querySelector("footer .task-comp").innerHTML =
            //`${completeCount} Completed Tasks`;
          }
        });
      document
        .querySelector(".onGoing")
        .addEventListener("change", function (event) {
          if (event.target.type === "checkbox") {
            if (event.target.checked) {
              completeCount++;

              let task = event.target.closest(".view-task");

              task.style.backgroundColor = "#faf8ff";
              task.style.opacity = "0.5";
              task.style.border = "none";

              task.querySelector(".user-task").style.textDecoration =
                "line-through";
              document.querySelector("footer .task-comp").innerHTML =
                `${completeCount} Completed Tasks`;
            } else {
              completeCount--;

              let task = event.target.closest(".view-task");

              task.style.backgroundColor = "#ffffff";

              task.style.opacity = "1";

              task.style.border = "1px solid #0000001a";

              task.querySelector(".user-task").style.textDecoration = "none";
              document.querySelector("footer .task-comp").innerHTML =
                `${completeCount} Completed Tasks`;
            }
          }
        });