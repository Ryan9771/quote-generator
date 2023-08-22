import getStyles from "../../Style";
import { useCallback, useMemo, useState } from "react";
import { ReactTags, Tag } from "react-tag-autocomplete";
import ArrowRight from "./ArrowRight";
import { HashLink } from "react-router-hash-link";

function TextFieldGroup() {
  const [selected, setSelected] = useState<Tag[]>([]);

  const suggestions = useMemo(
    () => [
      { value: 1, label: "happy" },
      { value: 2, label: "sad" },
      { value: 3, label: "angry" },
      { value: 4, label: "excited" },
    ],
    []
  );

  const onAdd = useCallback(
    (tag: any) => {
      setSelected([tag]);
    },
    [selected]
  );

  const onDelete = useCallback(() => {
    setSelected([]);
  }, [selected]);

  return (
    <div className={getStyles(styles, "ctn")}>
      <ReactTags
        placeholderText={selected.length > 0 ? "" : "Type an emotion"}
        suggestions={suggestions}
        selected={selected}
        onAdd={onAdd}
        onDelete={onDelete}
        noOptionsText="No emotions found"
        collapseOnSelect={true}
        activateFirstOption={true}
        allowBackspace={true}
      />
      {selected.length > 0 && (
        <HashLink
          to={`/feelings/${selected[0].label}`}
          className={getStyles(styles, "arrowIconDiv")}
        >
          <ArrowRight styling={getStyles(styles, "arrowIcon")} />
        </HashLink>
      )}
    </div>
  );
}

const styles = {
  ctn: ["relative"],
  arrowIcon: ["h-5", "w-5", "fill-white"],
  arrowIconDiv: [
    "bg-darkerGreen",
    "p-1",
    "sm:p-2",
    "rounded-full",
    "cursor-pointer",
    "hover:scale-105",
    "w-[40px]",
    "h-[40px]",
    "flex",
    "justify-center",
    "items-center",
    "absolute",
    "sm:top-1",
    "sm:bottom-0",
    "sm:left-60",
    "bottom-[-60px]",
    "left-20",
  ],
};

export default TextFieldGroup;
