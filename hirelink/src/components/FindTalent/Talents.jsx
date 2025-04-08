import React, { useEffect, useState } from "react";
import Sort from "../FindJob/Sort";
import TalentCard from "./TalentCard";
import { talents } from "../../data/Data";
import { getAllProfiles } from "../../services/ProfileService";
import { useDispatch, useSelector } from "react-redux";
import { resetFilter } from "../../slices/FilterSlice";

const Talents = () => {
  const [talents, setTalents] = useState([]);
  const [filteredTalents, setFilteredTalents] = useState([]);

  const filter = useSelector((state) => state.filter);
  const sort = useSelector((state) => state.sort);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFilter());
    getAllProfiles()
      .then((res) => {
        setTalents(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    let filterTalent = talents;

    // console.log(filter);

    if (filter.name) {
      filterTalent = filterTalent.filter(
        (talent) =>
          talent.name &&
          talent.name.toLowerCase().includes(filter.name.toLowerCase())
      );
    }

    if (filter["Job Title"] && filter["Job Title"].length > 0) {
      filterTalent = filterTalent.filter((talent) =>
        filter["Job Title"].some(
          (title) =>
            talent.jobTitle &&
            talent.jobTitle.toLowerCase().includes(title.toLowerCase())
        )
      );
    }

    if (filter["Location"] && filter["Location"].length > 0) {
      filterTalent = filterTalent.filter((talent) =>
        filter["Location"]?.some(
          (location) =>
            talent.location &&
            talent.location.toLowerCase().includes(location.toLowerCase())
        )
      );
    }

    if (filter["Skills"] && filter["Skills"].length > 0) {
      filterTalent = filterTalent.filter((talent) =>
        filter["Skills"]?.some(
          (skill) =>
            talent.skills &&
            talent.skills.some((talentSkill) =>
              talentSkill.toLowerCase().includes(skill.toLowerCase())
            )
        )
      );
    }

    if (filter.experience && filter.experience.length > 0) {
      filterTalent = filterTalent.filter(
        (talent) =>
          filter.experience[0] <= talent.totalExp &&
          talent.totalExp <= filter.experience[1]
      );
    }

    setFilteredTalents(filterTalent);
  }, [filter, talents]);

  useEffect(() => {
    if (sort === "Most Recent") {
      setFilteredTalents(
        [...talents].sort(
          (a, b) =>
            new Date(b.postTime).getTime() - new Date(a.postTime).getTime()
        )
      );
    } else if (sort === "Experience (Low to High)") {
      setFilteredTalents(
        [...talents].sort((a, b) => a.totalExp - b.totalExp)
      );
    } else if (sort === "Experience (High to Low)") {
      setFilteredTalents(
        [...talents].sort((a, b) => b.totalExp - a.totalExp)
      );
    }
  }, [sort]);

  return (
    <div className="px-5 mt-10">
      <div className="flex justify-between">
        {filteredTalents.length ? (
          <h4 className="font-bold text-2xl">Talents</h4>
        ) : (
          <p></p>
        )}

        <Sort />
      </div>
      <div className="flex flex-wrap items-center gap-9 mx-8 py-10 justify-center">
        {filteredTalents.length ? (
          filteredTalents.map((item, index) => (
            <TalentCard key={index} {...item} />
          ))
        ) : (
          <p className="text-center text-xl font-semibold">No Talents</p>
        )}
      </div>
    </div>
  );
};

export default Talents;
