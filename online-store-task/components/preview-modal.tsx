"use client";

import { closeModal } from "@/lib/redux/slices/modalSlice";
import { RootState } from "@/lib/redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import Gallery from "./gallery";
import Info from "./info";
import { Modal } from "./ui/modal";

const PreviewModal = () => {
  const product = useSelector((state: RootState) => state.modal.data);
  const open = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useDispatch();
  if (!product) {
    return null;
  }
  return (
    <Modal open={open} onClose={() => dispatch(closeModal())}>
      <div className="grid  w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery image={product.image} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info data={product} />{" "}
          {/* These are children for Modal component as <Modal></Modal>*/}
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
