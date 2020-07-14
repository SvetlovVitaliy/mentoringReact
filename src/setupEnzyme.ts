import Enzyme, { configure, shallow, mount, render } from "enzyme";
import EnzymeAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new EnzymeAdapter() });
export { shallow, mount, render };
export default Enzyme;
