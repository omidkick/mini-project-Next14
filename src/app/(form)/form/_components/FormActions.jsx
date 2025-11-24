import Button from "@/ui/Button";
import MiniLoading from "@/ui/MiniLoading";

export default function FormActions({ isSubmitting, onReset }) {
  return (
    <div className="mt-8 flex flex-col sm:flex-row gap-4">
      <Button
        type="submit"
        variant="primary"
        disabled={isSubmitting}
        className="flex-1 sm:flex-none min-w-[200px]"
        aria-busy={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <MiniLoading size="sm" />
            <span>Submitting...</span>
          </span>
        ) : (
          "Submit Form"
        )}
      </Button>

      <Button
        type="button"
        variant="outline"
        onClick={onReset}
        disabled={isSubmitting}
      >
        Reset Form
      </Button>
    </div>
  );
}
