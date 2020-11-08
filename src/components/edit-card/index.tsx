import React from "react";
import { EditCardContainner } from "./styles";
import TextArea from "../shared/Textarea";
import { Input } from "../shared/Input/styles";
import Button from "../shared/button";
import { IErrors, ICardValues, TSetValue } from "../../types";

const EditCard: React.FC<{
  setTitle: TSetValue;
  setPrice: TSetValue;
  setDescription: TSetValue;
  onSubmit: () => void;
  values: ICardValues;
  errors: IErrors;
}> = ({ setTitle, setPrice, setDescription, onSubmit, values, errors }) => {
  return (
    <EditCardContainner>
      <div className="short-title">
        <div className="label">Title</div>
        <TextArea
          placeholder={"short title"}
          value={values.title}
          errors={errors}
          name="title"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="price">
        <div className="label price">Price</div>
        <Input
          placeholder={"price"}
          value={values.price}
          name="price"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPrice(e.target.value.trim());
          }}
        />
        <div className="validation-error">{errors["price"]}</div>
      </div>
      <div className="description">
        <div className="label">Description</div>
        <TextArea
          placeholder={"description"}
          value={values.description}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setDescription(e.target.value);
          }}
          errors={errors}
          name="description"
        ></TextArea>
      </div>
      <div className="save-card">
        <Button
          disabled={Object.keys(errors).length !== 0}
          width={"100%"}
          height={"100%"}
          onClick={onSubmit}
        >
          <span className="btn-text">Save</span>
        </Button>
      </div>
    </EditCardContainner>
  );
};

export default EditCard;
