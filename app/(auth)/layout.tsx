export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-screen bg-white-50 flex-center bg-dotted-pattern bg-cover bg-center bg-fixed">
      {children}
    </div>
  );
}
