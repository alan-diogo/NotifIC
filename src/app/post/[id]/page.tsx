export default function PostIdPage({ params }: { params: { id: string } }) {
  const id = Number(params.id);

  return (
    <main>
      <h1>Post id: {id}</h1>
    </main>
  );
}
