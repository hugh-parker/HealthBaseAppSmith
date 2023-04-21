const fullName = {{name.text}};
const names = fullName.split(' ');
if (names.length > 0) {
  {{firstName.setText(names[0])}};
}
if (names.length > 1) {
  {{lastName.setText(names[names.length - 1])}};
}