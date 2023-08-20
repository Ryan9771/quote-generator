import getStyles from "../../Style";
import { useCallback, useMemo, useState } from "react";
import { ReactTags, Tag, ClassNames } from "react-tag-autocomplete";

function TextField() {
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

  const onDelete = useCallback(
    (tag: any) => {
      setSelected([]);
    },
    [selected]
  );

  return (
    <ReactTags
      placeholderText={selected.length > 0 ? "" : "Enter an emotion"}
      suggestions={suggestions}
      selected={selected}
      onAdd={onAdd}
      onDelete={onDelete}
      noOptionsText="No emotions found"
      collapseOnSelect={true}
      activateFirstOption={true}
      allowBackspace={true}
    />
  );
}

export default TextField;
