import Section from "../components/Section";

function Home() {
  const items = [
    {
      id: "1",
      title: "Song 1",
      description: "Desc 1",
      image:
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb6ef89e23678018c6d8630825/1/tr/default",
      type: "Buğra Erden",
    },
    {
      id: "2",
      title: "Song 2",
      description: "Desc 2",
      image:
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb4371a18ab0eb25feaba154d3/2/tr/default",
      type: "playlist",
    },
    {
      id: "3",
      title: "Song 3",
      description: "Desc 3",
      image:
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb28da7480a223ede516f57159/3/tr/default",
      type: "album",
    },
    {
      id: "4",
      title: "Song 4",
      description: "Desc 4",
      image:
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebaf38c0565f1b25edd75334ee/4/tr/default",
      type: "Zeynepsu Aktaş",
    },
    {
      id: "5",
      title: "Song 5",
      description: "Desc 5",
      image:
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebbc7571668a90592e6ecac62b/5/tr/default",
      type: "playlist",
    },
  ];
  return (
    <div
      className="pe-10" id="style-2"
    >
      <Section title="Son Oynatılanlar" more="lastsongs" items={items} />
      <Section title="En Çok Dinlenenler" more="mostlyplayed" items={items} />
      <Section title="En Çok Dinlenenler" more="mostlyplayed" items={items} />
      <Section title="En Çok Dinlenenler" more="mostlyplayed" items={items} />
    </div>
  );
}

export default Home;
