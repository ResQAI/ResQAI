export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4">
        <div className="col-span-full xl:col-auto">
          <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2">
            <div className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
              <img
                className="mb-4 rounded-lg w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0"
                src="https://ndma.gov.in/sites/default/files/emblem-dark.png"
                alt="NDMA Logo"
              />
              <div>
                <h3 className="mb-1 text-2xl font-bold text-gray-900">
                  National Disaster Management Authority
                </h3>
                <div className="mb-4 text-sm text-gray-600">
                  Government of India
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2">
            <h3 className="mb-6 text-xl font-semibold text-gray-900">
              Organization Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="info-group">
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Headquarters
                </label>
                <p className="text-gray-900">
                  A-1, Safdarjung Enclave, New Delhi-110029
                </p>
              </div>
              <div className="info-group">
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Contact Number
                </label>
                <p className="text-gray-900">+91-11-26701700</p>
              </div>
              <div className="info-group">
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Emergency Number
                </label>
                <p className="text-gray-900">1078 (Toll Free)</p>
              </div>
              <div className="info-group">
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Email
                </label>
                <p className="text-gray-900">info@ndma.gov.in</p>
              </div>
              <div className="info-group">
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Established
                </label>
                <p className="text-gray-900">23 December 2005</p>
              </div>
              <div className="info-group">
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Jurisdiction
                </label>
                <p className="text-gray-900">Republic of India</p>
              </div>
            </div>
          </div>

          <div className="p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2">
            <h3 className="mb-6 text-xl font-semibold text-gray-900">
              Mission Statement
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To build a safer and disaster resilient India by developing a
              holistic, proactive, multi-disaster oriented and technology driven
              strategy through a culture of prevention, mitigation, preparedness
              and response.
            </p>
          </div>

          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="mb-6 text-2xl font-bold text-gray-900 border-b pb-4">
              Key Officials
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg border border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-2xl font-bold text-blue-600">
                        PM
                      </span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">
                      Shri Narendra Modi
                    </h4>
                    <p className="text-blue-600 font-medium">
                      Chairperson, NDMA
                    </p>
                    <p className="text-sm text-gray-600">
                      Prime Minister of India
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg border border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-2xl font-bold text-blue-600">
                        VC
                      </span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">
                      Dr. Kamal Kishore
                    </h4>
                    <p className="text-blue-600 font-medium">
                      Vice Chairperson
                    </p>
                    <p className="text-sm text-gray-600">
                      Member Secretary, NDMA
                    </p>
                  </div>
                </div>
              </div>

              {[
                {
                  name: "Shri Syed Ata Hasnain",
                  position: "Member",
                  expertise: "Disaster Management Expert",
                },
                {
                  name: "Shri Krishna S. Vatsa",
                  position: "Member",
                  expertise: "Policy & Planning",
                },
                {
                  name: "Shri Rajendra Singh",
                  position: "Member",
                  expertise: "Operations & Communications",
                },
                {
                  name: "Dr. Rajesh Malhotra",
                  position: "Member",
                  expertise: "Medical Preparedness",
                },
              ].map((official, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-lg font-bold text-gray-600">
                          M
                        </span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {official.name}
                      </h4>
                      <p className="text-gray-600">{official.position}</p>
                      <p className="text-sm text-gray-500">
                        {official.expertise}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
