import PresentationShell from './components/PresentationShell';
import Section1Cover from './sections/Section1Cover';
import Section2Problem from './sections/Section2Problem';
import Section3Workflow from './sections/Section3Workflow';
import Section3bPreview from './sections/Section3bPreview';
import Section4Proof from './sections/Section4Proof';
import Section5Impact from './sections/Section5Impact';
import Section6Roadmap from './sections/Section6Roadmap';
import Section7Closing from './sections/Section7Closing';

export default function App() {
  return (
    <PresentationShell>
      <Section1Cover />
      <Section2Problem />
      <Section3Workflow />
      <Section3bPreview />
      <Section4Proof />
      <Section5Impact />
      <Section6Roadmap />
      <Section7Closing />
    </PresentationShell>
  );
}
