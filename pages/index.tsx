import Nav from '../components/nav';
import GradientList from '../components/GradientList';
import NewGradientForm from '../components/NewGradientForm';

function IndexPage() {
  return (
    <div>
      <Nav />
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 lg:gap-5 divide-y-2 divide-dotted">
          <GradientList />
          <NewGradientForm />
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
