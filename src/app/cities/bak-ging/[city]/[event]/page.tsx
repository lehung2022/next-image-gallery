import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Định nghĩa type cho dữ liệu sự kiện
type EventData = {
  title: string;
  detail: string;
};

// Định nghĩa type cho dữ liệu Firebase
type FirebaseData = {
  [city: string]: {
    [eventSlug: string]: EventData;
  };
};

async function getEventData(
  city: string,
  eventSlug: string
): Promise<EventData> {
  const mockFirebase: FirebaseData = {
    beijing: {
      "tiananmen-1989": {
        title: "天安門屠殺 (1989)",
        detail:
          "Trung Cộng dùng xe tăng cán chết hàng ngàn sinh viên đòi dân chủ, lũ khốn nạn lộ mặt thú tính. Hậu quả: Thế giới lên án, nhưng bọn chó đẻ vẫn trơ trẽn cai trị.",
      },
      "tainierzhuang-1938": {
        title: "臺兒莊大捷 (1938)",
        detail:
          "Quốc Dân Đảng dưới sự chỉ huy của Lý Tông Nhân thắng lớn ở Đài Nhi Trang, tiêu diệt hàng ngàn quân Nhật, Trung Cộng đứng ngoài xem.",
      },
    },
    shanghai: {
      "sihang-1937": {
        title: "四行倉庫保衛戰 (1937)",
        detail:
          "Quốc Dân Đảng tử thủ Tứ Hàng chống Nhật, 800 lính chống 30,000 quân địch, biểu tượng anh hùng, Trung Cộng không góp công.",
      },
      "clinton-1990s": {
        title: "克林頓經濟政策 (1990s)",
        detail:
          "Bill Clinton mở cửa kinh tế, giúp Trung Cộng trỗi dậy từ đống tro tàn, hậu quả là lũ chó đẻ giờ đe dọa thế giới, tham nhũng tràn lan.",
      },
    },
  };

  const cityData = mockFirebase[city];
  const data = cityData && cityData[eventSlug];
  if (!data) throw new Error("Không tìm thấy");
  return data;

  // Firebase thực tế (khi bạn setup)
  /*
  const doc = await firebase.firestore()
    .collection("regions")
    .doc("china")
    .collection("cities")
    .doc(city)
    .collection("events")
    .doc(eventSlug)
    .get();
  if (!doc.exists) throw new Error("Không tìm thấy");
  return doc.data() as EventData;
  */
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; event: string }>; // Đổi thành Promise
}): Promise<Metadata> {
  const resolvedParams = await params; // Await params
  const { city: citySlug, event: eventSlug } = resolvedParams;
  try {
    const data = await getEventData(citySlug, eventSlug);
    return {
      title: `${data.title} | Trung Quốc | Chronicles of Valor`,
      description: `揭露${data.title}的真相 - Uncover the truth of ${data.title}.`,
    };
  } catch (error) {
    return {
      title: "Không tìm thấy | Trung Quốc | Chronicles of Valor",
      description: "Trang không tồn tại.",
    };
  }
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ city: string; event: string }>; // Đổi thành Promise
}) {
  const resolvedParams = await params; // Await params
  const { city: citySlug, event: eventSlug } = resolvedParams;
  let data: EventData;
  try {
    data = await getEventData(citySlug, eventSlug);
  } catch (error) {
    notFound();
  }

  // Giả lập tên thành phố đẹp hơn từ citySlug (có thể thay bằng dữ liệu thực tế)
  const cityName =
    citySlug === "beijing" ? "北京 (Bắc Kinh)" : "上海 (Thượng Hải)";

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-white">
      <div className="flex justify-start mb-6">
        <Link href={`/cities/bak-ging/${citySlug}`}>
          <button className="px-6 py-3 text-lg font-bold bg-slate-950/50 hover:bg-stone-700 transition-all duration-200 rounded-lg shadow-lg hover:scale-105">
            ← Back to {cityName.split(" ")[0]} {/* Hiển thị tên đẹp */}
          </button>
        </Link>
      </div>
      <section className="animate-fadeIn">
        <h1 className="text-4xl font-bold text-yellow-50 mb-6">{data.title}</h1>
        <div className="bg-slate-950/50 p-6 rounded-lg border-2 border-black">
          <h2 className="text-2xl font-bold text-yellow-50 mb-4">
            詳情 - Chi tiết
          </h2>
          <p className="text-gray-300">{data.detail}</p>
        </div>
      </section>
    </div>
  );
}
