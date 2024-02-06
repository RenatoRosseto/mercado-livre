import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <h1>Página em desenvolvimento</h1>
      <p>A página que você está procurando, está em desenvolvimento..</p>
      <Link href="/">
        <a>Retornar à página inicial</a>
      </Link>
    </div>
  );
};

export default NotFoundPage;
