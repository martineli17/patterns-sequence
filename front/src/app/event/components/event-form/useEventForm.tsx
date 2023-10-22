import { useRef } from "react";
import { AddEventDto } from "@/dtos/event-request.dto";
import { addEventAsync } from "@/services/event.service";

export function useEventFormRefs() {
  const labelWhenRef = useRef<HTMLLabelElement>(null);
  const labelPositionRef = useRef<HTMLLabelElement>(null);
  const labelCepRef = useRef<HTMLLabelElement>(null);
  const labelNumberRef = useRef<HTMLLabelElement>(null);
  const labelExtensionRef = useRef<HTMLLabelElement>(null);

  const inputWhenRef = useRef<HTMLInputElement>(null);
  const inputPositionRef = useRef<HTMLInputElement>(null);
  const inputCepRef = useRef<HTMLInputElement>(null);
  const inputNumberRef = useRef<HTMLInputElement>(null);
  const inputExtensionRef = useRef<HTMLInputElement>(null);

  async function handle() {
    const eventDto: AddEventDto = {
      date: new Date(inputWhenRef.current!.value),
      position: inputPositionRef.current?.value,
      location: {
        cep: inputCepRef.current?.value,
        number: inputNumberRef.current?.valueAsNumber,
        extension: inputExtensionRef.current?.value,
      },
    };

    const response = await addEventAsync(eventDto);
    return response;
  }

  return {
    labelWhenRef,
    labelPositionRef,
    labelCepRef,
    labelNumberRef,
    labelExtensionRef,

    inputWhenRef,
    inputPositionRef,
    inputCepRef,
    inputNumberRef,
    inputExtensionRef,

    handle,
  };
}
