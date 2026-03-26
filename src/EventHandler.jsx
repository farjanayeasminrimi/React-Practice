export default function Handler() {
  alert("Clicked by the author on button1");
}
export const Button3Handler = () => {
  alert("Button3 has clicked by the author");
};

export const Button4Handler = (name) => {
  alert(`Button five has clicked by ${name}`);
};
