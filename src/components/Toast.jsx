import { useCart } from '../context/CartContext';

export default function Toast() {
  const { toast } = useCart();
  return (
    <div className={`fixed bottom-[76px] left-1/2 z-[300] -translate-x-1/2 transition-all duration-300 pointer-events-none
      ${toast.show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
      <div className="bg-ink text-white px-5 py-3 rounded-full text-[0.8rem] font-normal whitespace-nowrap flex items-center gap-2 shadow-lg">
        <span className="w-[7px] h-[7px] rounded-full bg-green flex-shrink-0" />
        {toast.msg}
      </div>
    </div>
  );
}
