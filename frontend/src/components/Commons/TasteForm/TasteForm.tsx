import styles from "@/components/Commons/TasteForm/TasteForm.module.css";
import React, { useState } from "react";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
import { ChangeEvent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { RadioGroup, FormControlLabel, Radio, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  radioGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    margin: "0 auto",
    // border: "solid ",
  },
  formControlLabel: {
    // margin: theme.spacing(1),
    color: "white",
    "& .MuiRadio-colorSecondary.Mui-checked": {
      color: "white",
    },
  },
  formControl: {
    width: "90vw",
  },
  radio: {
    "&:not(:checked)": {
      color: theme.palette.common.white,
    },
  },
  label: {
    fontSize: "0.9rem", // 폰트 크기를 변경합니다.
  },
}));

const TasteForm = () => {
  const [selectedValue, setSelectedValue] = useState({
    sweetness: null,
    bitter: null,
    body: null,
    dryness: null,
    sour: null,
  });

  const classes = useStyles();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue({
      ...selectedValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className={`${styles[`container`]}`}>
      <h4 className={`${styles[`head-text`]}`}>선호하는 맛의 취향을 선택해보세요</h4>
      <p className={`${styles[`info-text`]}`}>선택한 맛울 기반으로 주종별 추천을 해드립니다.</p>

      <div className={`${styles[`taste-wrap`]}`}>
        <div className={`${styles[`classes.root`]}`}>
          <h4 className={`${styles[`taste-name`]}`}>단맛</h4>
          <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup
              className={classes.radioGroup}
              row
              aria-labelledby="demo-form-control-label-placement"
              name="sweetness"
              defaultValue="top"
              value={selectedValue.sweetness}
              onChange={handleChange}
            >
              <FormControlLabel
                className={classes.formControlLabel}
                value="top"
                control={<Radio className={classes.radio} />}
                label={<Typography className={classes.label}>상</Typography>}
                labelPlacement="top"
              />
              <FormControlLabel
                className={classes.formControlLabel}
                value="middle"
                control={<Radio className={classes.radio} />}
                label={<Typography className={classes.label}>중</Typography>}
                labelPlacement="top"
              />
              <FormControlLabel
                className={classes.formControlLabel}
                value="bottom"
                control={<Radio className={classes.radio} />}
                label={<Typography className={classes.label}>하</Typography>}
                labelPlacement="top"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className={`${styles[`classes.root`]}`}>
          <h4 className={`${styles[`taste-name`]}`}>쓴맛</h4>
          <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup
              className={classes.radioGroup}
              row
              aria-labelledby="demo-form-control-label-placement"
              name="bitter"
              defaultValue="top"
              value={selectedValue.bitter}
              onChange={handleChange}
            >
              <FormControlLabel
                className={classes.formControlLabel}
                value="top"
                control={<Radio className={classes.radio} />}
                label={<Typography className={classes.label}>상</Typography>}
                labelPlacement="top"
              />
              <FormControlLabel
                className={classes.formControlLabel}
                value="middle"
                control={<Radio className={classes.radio} />}
                label={<Typography className={classes.label}>중</Typography>}
                labelPlacement="top"
              />
              <FormControlLabel
                className={classes.formControlLabel}
                value="bottom"
                control={<Radio className={classes.radio} />}
                label={<Typography className={classes.label}>하</Typography>}
                labelPlacement="top"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className={`${styles[`classes.root`]}`}>
          <h4 className={`${styles[`taste-name`]}`}>바디감</h4>
          <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup
              className={classes.radioGroup}
              row
              aria-labelledby="demo-form-control-label-placement"
              name="body"
              defaultValue="top"
              value={selectedValue.body}
              onChange={handleChange}
            >
              <FormControlLabel
                className={classes.formControlLabel}
                value="top"
                control={<Radio className={classes.radio} />}
                label={<Typography className={classes.label}>상</Typography>}
                labelPlacement="top"
              />
              <FormControlLabel
                className={classes.formControlLabel}
                value="middle"
                control={<Radio className={classes.radio} />}
                label={<Typography className={classes.label}>중</Typography>}
                labelPlacement="top"
              />
              <FormControlLabel
                className={classes.formControlLabel}
                value="bottom"
                control={<Radio className={classes.radio} />}
                label={<Typography className={classes.label}>하</Typography>}
                labelPlacement="top"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className={`${styles[`classes.root`]}`}>
          <h4 className={`${styles[`taste-name`]}`}>텁텁함</h4>
          <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup
              className={classes.radioGroup}
              row
              aria-labelledby="demo-form-control-label-placement"
              name="dryness"
              defaultValue="top"
              value={selectedValue.dryness}
              onChange={handleChange}
            >
              <FormControlLabel
                className={classes.formControlLabel}
                value="top"
                control={<Radio className={classes.radio} />}
                label={<Typography className={classes.label}>상</Typography>}
                labelPlacement="top"
              />
              <FormControlLabel
                className={classes.formControlLabel}
                value="middle"
                control={<Radio className={classes.radio} />}
                label={<Typography className={classes.label}>중</Typography>}
                labelPlacement="top"
              />
              <FormControlLabel
                className={classes.formControlLabel}
                value="bottom"
                control={<Radio className={classes.radio} />}
                label={<Typography className={classes.label}>하</Typography>}
                labelPlacement="top"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className={`${styles[`classes.root`]}`}>
          <h4 className={`${styles[`taste-name`]}`}>신맛</h4>
          <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup
              className={classes.radioGroup}
              row
              aria-labelledby="demo-form-control-label-placement"
              name="sour"
              defaultValue="top"
              value={selectedValue.sour}
              onChange={handleChange}
            >
              <FormControlLabel
                className={classes.formControlLabel}
                value="top"
                control={<Radio className={classes.radio} />}
                label={<Typography className={classes.label}>상</Typography>}
                labelPlacement="top"
              />
              <FormControlLabel
                className={classes.formControlLabel}
                value="middle"
                control={<Radio className={classes.radio} />}
                label={<Typography className={classes.label}>중</Typography>}
                labelPlacement="top"
              />
              <FormControlLabel
                className={classes.formControlLabel}
                value="bottom"
                control={<Radio className={classes.radio} />}
                label={<Typography className={classes.label}>하</Typography>}
                labelPlacement="top"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default TasteForm;