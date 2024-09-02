export default function SpaceAvailable({ spaceUsed, totalSpace }) {
  return (
    <p className="text-xl">
      Space used: {spaceUsed}/{totalSpace}{" "}
    </p>
  );
}
