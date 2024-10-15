import HelpBox from './HelpBox';
import './HelpArea.css';

const HELP_ITEMS = [
  {
    id: 'h1',
    title: 'What is the basic unit of life?',
    text: 'The basic unit of life is the cell. Cells are the smallest units that can carry out all the functions necessary for life.',
  },
  {
    id: 'h2',
    title: 'What is the speed of light in a vacuum?',
    text: 'The speed of light in a vacuum is approximately 299,792 kilometers per second (or about 186,282 miles per second).',
  },
  {
    id: 'h3',
    title: 'What is the smallest unit of matter?',
    text: ' The smallest unit of matter is the atom. An atom consists of a nucleus (containing protons and neutrons) and a cloud of electrons that orbit the nucleus.',
  },
];

function HelpArea() {
  return (
    <section data-testid="help-area" id="help-area">
      {HELP_ITEMS.map((item) => (
        <HelpBox key={item.id} title={item.title} text={item.text} />
      ))}
    </section>
  );
}

export default HelpArea;
