import newPic from '../../src/assets/poster-kerst-sluiting.jpg';

export default function ChristmasToastContent() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        overflow: 'visible',
      }}
    >
      <img
        src={newPic}
        alt="Vakantie"
        style={{ width: '100%', borderRadius: '6px' }}
      />
    </div>
  );
}
