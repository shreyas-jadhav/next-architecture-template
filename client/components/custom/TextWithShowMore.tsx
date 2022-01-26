import React, { useState } from "react";
import { Button } from "@mui/material";
interface Props {
  children: string;
  minLength?: number;
  showButton?: boolean;
}

const TextWithShowMore = ({
  children = "",
  minLength = 100,
  showButton = true,
}: Props): JSX.Element => {
  const showMoreRequired = children?.length > minLength;

  const [showMoreEnabled, setShowMoreEnabled] = useState(false);

  if (!children) return <></>;
  if (!showMoreRequired) return <>{children}</>;
  return (
    <>
      {showMoreEnabled ? children : children.slice(0, minLength)}{" "}
      {showButton && (
        <Button
          size="small"
          onClick={() => setShowMoreEnabled((prev) => !prev)}
        >
          Read {showMoreEnabled ? `Less` : `More`}
        </Button>
      )}
    </>
  );
};

export default TextWithShowMore;
