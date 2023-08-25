import getStyles from "../../Style";
import { useCallback, useState } from "react";
import { ReactTags, Tag } from "react-tag-autocomplete";
import { HashLink } from "react-router-hash-link";
import ArrowRight from "./ArrowRight";
import { suggestions } from "../../quotes/Emotions";

function TextFieldGroup() {
  const [selected, setSelected] = useState<Tag[]>([]);

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
        placeholderText={selected.length > 0 ? "" : "Type how you feel"}
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
  ctn: ["relative", "trans"],
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
    "trans",
  ],
};

export default TextFieldGroup;
