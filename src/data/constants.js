const defaultTheme = {
  fontFamily: "'Josefin Sans', sans-serif",
  linearGradient: "linear-gradient(hsl(192, 100%, 67%),  hsl(280, 87%, 65%))",
  titleColor: "hsl(0, 0%, 100%)",
  activeFilterColor: "hsl(220, 98%, 61%)"
}

export const lightTheme = {
  ...defaultTheme,
  bodyBackground: 'hsl(0, 0%, 98%)',
  todoBackground: 'hsl(0, 0%, 100%)',
  deleteButtonColor: "hsl(236, 33%, 92%)",
  placeholderColor: "hsl(236, 9%, 61%)",
  todoColor: "hsl(235, 19%, 35%)",
  todoCompleteColor: "hsl(233, 11%, 84%)", 
  filterColor: "hsl(236, 9%, 61%)",
  hoverFilterColor: "hsl(235, 19%, 35%)",
  toggleBorderColor: "hsl(233, 11%, 84%)"
}

export const darkTheme = {
  ...defaultTheme,
  bodyBackground: 'hsl(235, 21%, 11%)',
  todoBackground: 'hsl(235, 24%, 19%)',
  deleteButtonColor: "hsl(234, 11%, 52%)",
  placeholderColor: "hsl(234, 11%, 52%)",
  todoColor: "hsl(234, 39%, 85%)",
  todoCompleteColor: "hsl(233, 14%, 35%)", 
  filterColor: "hsl(233, 14%, 35%)",
  hoverFilterColor: "hsl(236, 33%, 92%)",
  toggleBorderColor: "hsl(237, 14%, 26%)"
}

export const placeholderData = [
  {id: "1", title: "Complete online JavaScript course", completed: true},
  {id: "2", title: "Jog around the park 3x", completed: false},
  {id: "3", title: "10 minutes meditation", completed: false},
  {id: "4", title: "Read for 1 hour", completed: false},
  {id: "5", title: "Pick up groceries", completed: false},
  {id: "6", title: "Complete Todo App on Frontend Mentor", completed: false}
];