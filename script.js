const employees = [
    { name: "Arm", position: "Front End" },
    { name: "Game", position: "Back End" },
  ];
  
  function displayEmployeeInfo(employees, targetName) {
    const employee = employees.find((emp) => emp.name === targetName);
  
    if (employee) {
      return `ชื่อ${employee.name} ตำแหน่ง ${employee.position}`;
    } else {
      return `Employee with name ${targetName} not found.`;
    }
  }
  
  const jannyInfo = displayEmployeeInfo(employees, "Arm");
  const gameInfo = displayEmployeeInfo(employees, "Game");
  
  console.log(jannyInfo);
  console.log(gameInfo);

  document.getElementById("one").innerHTML = jannyInfo;
  document.getElementById("two").innerHTML = gameInfo;
  
  // const x = displayEmployeeInfo(employees, "Back End");
  // console.log(x);
  