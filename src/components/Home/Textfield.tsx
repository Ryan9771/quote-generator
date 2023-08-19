import getStyles from "../../Style";
import { useCallback, useMemo, useState } from "react";
import { ReactTags, Tag } from "react-tag-autocomplete";

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
      console.log(tag);
      setSelected([tag]);
    },
    [selected]
  );

  const onDelete = useCallback(
    (tag: any) => {
      console.log(tag);
      setSelected([]);
    },
    [selected]
  );

  return (
    <ReactTags
      labelText="Enter an emotion"
      suggestions={suggestions}
      selected={selected}
      onAdd={onAdd}
      onDelete={onDelete}
      noOptionsText="No emotions found"
    />
  );
}

export default TextField;
