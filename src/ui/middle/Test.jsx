export default function Application() {
    return (
        <div class="tabs three">
            <input id='tab-1' type='radio' name='tabgroupB' checked />
            <label class="pseudo button toggle" for="tab-1">Forest</label>
            <input id='tab-2' type='radio' name='tabgroupB' />
            <label class="pseudo button toggle" for="tab-2">Lake</label>
            <input id='tab-3' type='radio' name='tabgroupB' />
            <label class="pseudo button toggle" for="tab-3">Balloon</label>
            <div class="row">
                <div>
                    Forest
                </div>

                <div>
                    Lake
                </div>

                <div>
                    Baloo
                </div>
            </div>
        </div>
    )
}