export default function SpaceAvailable({ spaceUsed, totalSpace }) {
  return (
    <div className="m-4">
      <p className="text-xl">
        Space used: {spaceUsed}/{totalSpace}{" "}
      </p>
    </div>
  );
}
