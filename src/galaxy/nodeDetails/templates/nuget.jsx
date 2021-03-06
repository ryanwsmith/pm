
import commonPackageTemplate from './commonPackageTempalte.jsx';

export default require('maco').template(nuget);

function nuget(props) {
  var model = props.model;

  var link = 'https://www.nuget.org/packages/' + encodeURIComponent(model.name);
  var linkText = model.name;

  return commonPackageTemplate(model, link, linkText);
}
