import React from "react";

import showMenu from "./ShowMenu";
//** Import Redux kit
import store, { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { handleSetMenuTouchDisplay } from "../../redux/features/widgets.slice";
import Button from "@mui/joy/Button";
import { IconLock, IconLockOpen } from "@tabler/icons-react";
// import { BoardService } from "@/services";

export default function ObjectLock({
  paddingLeft,
  paddingRight,
  canvas
}: {
  paddingLeft: number;
  paddingRight: number;
  canvas: any
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const canvas: any = BoardService.getInstance().getBoard();
  const currentLockStatus = useSelector(
    (state: RootState) => state.board.currentLockStatus
  );

  const handleClick = (event: any) => {
    event.preventDefault();
    const object = canvas.getActiveObject() || canvas.findTarget(event);
    canvas.defaultCursor = "default";
    let lockStatus = false;
    let group = null;
    if (canvas.getActiveObjects().length > 1) group = canvas.getActiveObject();

    if (!group) lockStatus = object.locked;
    else lockStatus = canvas.getActiveObject()._objects[1].locked;

    handleLock(object, group, !lockStatus);
    showMenu(canvas);
    // canvas.discardActiveObject();
    canvas.requestRenderAll();
    setAnchorEl(event.currentTarget);
    store.dispatch(handleSetMenuTouchDisplay("none"));
  };

  const helperLock = (object: any, isLocked: any) => {
    console.log("helperLock", object, isLocked);
    if (object.parent) {
      lockObject(object, isLocked);
      return;
    }
    if (object) {
      if (!isLocked) {
        canvas.unLockObject(object);
      } else {
        canvas.lockObject(object);
      }
      object.saveData("MODIFIED", [
        "locked",
        "lockMovementX",
        "lockMovementY",
        "selectable",
        "activeSelection",
        "editable",
        "lockScalingX",
        "lockScalingY",
        "lockSkewingX",
        "lockSkewingY",
        "lockRotation",
        "isEditing",
        "shadow",
      ]);
      return;
    }
  };

  const handleLock = (object: any, group: any, isLocked: any) => {
    if (!group) {
      helperLock(object, isLocked);
    } else {
      helperLock(group, isLocked);
      group._objects.forEach((obj: any) => {
        helperLock(obj, isLocked);
      });
    }
  };

  const lockObject = (obj: any, locked: any) => {
    // const cursorLock = "data:image/svg+xml,%3Csvg width='10' height='13' viewBox='0 0 10 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.832 0.755L5 0.75C5.70029 0.749965 6.37421 1.01709 6.8843 1.49689C7.39439 1.97669 7.70222 2.63302 7.745 3.332L7.75 3.5V4H8.5C8.89782 4 9.27936 4.15804 9.56066 4.43934C9.84196 4.72064 10 5.10218 10 5.5V11.5C10 11.8978 9.84196 12.2794 9.56066 12.5607C9.27936 12.842 8.89782 13 8.5 13H1.5C1.10218 13 0.720644 12.842 0.43934 12.5607C0.158035 12.2794 0 11.8978 0 11.5V5.5C0 5.10218 0.158035 4.72064 0.43934 4.43934C0.720644 4.15804 1.10218 4 1.5 4H2.25V3.5C2.24997 2.79971 2.51709 2.12579 2.99689 1.6157C3.47669 1.10561 4.13302 0.797781 4.832 0.755L5 0.75L4.832 0.755ZM5 7.5C4.73478 7.5 4.48043 7.60536 4.29289 7.79289C4.10536 7.98043 4 8.23478 4 8.5C4 8.76522 4.10536 9.01957 4.29289 9.20711C4.48043 9.39464 4.73478 9.5 5 9.5C5.26522 9.5 5.51957 9.39464 5.70711 9.20711C5.89464 9.01957 6 8.76522 6 8.5C6 8.23478 5.89464 7.98043 5.70711 7.79289C5.51957 7.60536 5.26522 7.5 5 7.5ZM5.128 2.256L5 2.25C4.69054 2.24986 4.39203 2.36451 4.16223 2.57177C3.93244 2.77903 3.78769 3.06417 3.756 3.372L3.75 3.5V4H6.25V3.5C6.25014 3.19054 6.13549 2.89203 5.92823 2.66223C5.72097 2.43244 5.43583 2.28769 5.128 2.256L5 2.25L5.128 2.256Z' fill='%23232930'/%3E%3C/svg%3E";
    if (!obj || !canvas) return;

    if (locked) {
      if (obj.parent) {
        for (let objas of obj._objects) {
          canvas.lockObject(objas);
          if (objas.isPanel || objas.objType === "WBRectPanel") {
            objas.setLockedShadow(true);
          }
        }
      }
      canvas.lockObject(obj);
    } else {
      if (obj.parent) {
        for (let objas of obj._objects) {
          canvas.unLockObject(objas);
          if (objas.isPanel || objas.objType === "WBRectPanel") {
            objas.setLockedShadow(false);
          }
        }
      }
      canvas.unLockObject(obj);
    }

    obj.saveData("MODIFIED", [
      "locked",
      "lockMovementX",
      "lockMovementY",
      "selectable",
      "activeSelection",
      "editable",
      "lockScalingX",
      "lockScalingY",
      "lockSkewingX",
      "lockSkewingY",
      "lockRotation",
      "isEditing",
      "shadow",
    ]);

    canvas.requestRenderAll();
  };

  const handleCurrentLockStatusDOM = () =>
    currentLockStatus ? (
      <IconLock
        fontSize="small"
        style={{ strokeWidth: "var(--joy-lineHeight-sm)" }}
      />
    ) : (
      <IconLockOpen
        fontSize="small"
        style={{ strokeWidth: "var(--joy-lineHeight-sm)" }}
      />
    );

  //LockOpenOutlinedIcon LockOutlinedIcon
  return (
    <Button
      component="label"
      tabIndex={-1}
      color="neutral"
      variant="plain"
      onClick={handleClick}
      aria-controls="object-lock"
      sx={{ p: "4px", m: 0 }}
      data-cy="lock"
      size="sm"
    >
      {handleCurrentLockStatusDOM()}
    </Button>
  );
}
