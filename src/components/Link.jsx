import Block from "./Block";

function Link({ url, text }) {
  return (
    <Block>
      {url && (
        <a
          href={url}
          className="h-full w-full flex justify-center items-center md:text-lg font-medium"
          target="_blank"
        >
          {text}
        </a>
      )}
    </Block>
  );
}

export default Link;
