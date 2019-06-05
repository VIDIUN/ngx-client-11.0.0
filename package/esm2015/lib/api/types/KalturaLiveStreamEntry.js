/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaLiveStreamBitrate } from './KalturaLiveStreamBitrate';
import { KalturaLiveEntry } from './KalturaLiveEntry';
/**
 * @record
 */
export function KalturaLiveStreamEntryArgs() { }
/** @type {?|undefined} */
KalturaLiveStreamEntryArgs.prototype.bitrates;
/** @type {?|undefined} */
KalturaLiveStreamEntryArgs.prototype.primaryBroadcastingUrl;
/** @type {?|undefined} */
KalturaLiveStreamEntryArgs.prototype.secondaryBroadcastingUrl;
/** @type {?|undefined} */
KalturaLiveStreamEntryArgs.prototype.primaryRtspBroadcastingUrl;
/** @type {?|undefined} */
KalturaLiveStreamEntryArgs.prototype.secondaryRtspBroadcastingUrl;
/** @type {?|undefined} */
KalturaLiveStreamEntryArgs.prototype.streamName;
/** @type {?|undefined} */
KalturaLiveStreamEntryArgs.prototype.streamUrl;
/** @type {?|undefined} */
KalturaLiveStreamEntryArgs.prototype.hlsStreamUrl;
/** @type {?|undefined} */
KalturaLiveStreamEntryArgs.prototype.urlManager;
/** @type {?|undefined} */
KalturaLiveStreamEntryArgs.prototype.encodingIP1;
/** @type {?|undefined} */
KalturaLiveStreamEntryArgs.prototype.encodingIP2;
/** @type {?|undefined} */
KalturaLiveStreamEntryArgs.prototype.streamPassword;
export class KalturaLiveStreamEntry extends KalturaLiveEntry {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.bitrates === 'undefined')
            this.bitrates = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaLiveStreamEntry' },
            streamRemoteId: { type: 's', readOnly: true },
            streamRemoteBackupId: { type: 's', readOnly: true },
            bitrates: { type: 'a', subTypeConstructor: KalturaLiveStreamBitrate, subType: 'KalturaLiveStreamBitrate' },
            primaryBroadcastingUrl: { type: 's' },
            secondaryBroadcastingUrl: { type: 's' },
            primaryRtspBroadcastingUrl: { type: 's' },
            secondaryRtspBroadcastingUrl: { type: 's' },
            streamName: { type: 's' },
            streamUrl: { type: 's' },
            hlsStreamUrl: { type: 's' },
            urlManager: { type: 's' },
            encodingIP1: { type: 's' },
            encodingIP2: { type: 's' },
            streamPassword: { type: 's' },
            streamUsername: { type: 's', readOnly: true },
            primaryServerNodeId: { type: 'n', readOnly: true }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaLiveStreamEntry.prototype.streamRemoteId;
    /** @type {?} */
    KalturaLiveStreamEntry.prototype.streamRemoteBackupId;
    /** @type {?} */
    KalturaLiveStreamEntry.prototype.bitrates;
    /** @type {?} */
    KalturaLiveStreamEntry.prototype.primaryBroadcastingUrl;
    /** @type {?} */
    KalturaLiveStreamEntry.prototype.secondaryBroadcastingUrl;
    /** @type {?} */
    KalturaLiveStreamEntry.prototype.primaryRtspBroadcastingUrl;
    /** @type {?} */
    KalturaLiveStreamEntry.prototype.secondaryRtspBroadcastingUrl;
    /** @type {?} */
    KalturaLiveStreamEntry.prototype.streamName;
    /** @type {?} */
    KalturaLiveStreamEntry.prototype.streamUrl;
    /** @type {?} */
    KalturaLiveStreamEntry.prototype.hlsStreamUrl;
    /** @type {?} */
    KalturaLiveStreamEntry.prototype.urlManager;
    /** @type {?} */
    KalturaLiveStreamEntry.prototype.encodingIP1;
    /** @type {?} */
    KalturaLiveStreamEntry.prototype.encodingIP2;
    /** @type {?} */
    KalturaLiveStreamEntry.prototype.streamPassword;
    /** @type {?} */
    KalturaLiveStreamEntry.prototype.streamUsername;
    /** @type {?} */
    KalturaLiveStreamEntry.prototype.primaryServerNodeId;
}
typesMappingStorage['KalturaLiveStreamEntry'] = KalturaLiveStreamEntry;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVTdHJlYW1FbnRyeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUxpdmVTdHJlYW1FbnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBd0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQjVFLE1BQU0sNkJBQThCLFNBQVEsZ0JBQWdCOzs7O0lBbUJ4RCxZQUFZLElBQWtDO1FBRTFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztLQUNoRTs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDM0UsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ2hELG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3RELFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsd0JBQXdCLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1lBQzlHLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsMEJBQTBCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNDLDRCQUE0QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNoRCxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtTQUM1QyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsd0JBQXdCLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTGl2ZVN0cmVhbUJpdHJhdGUgfSBmcm9tICcuL0thbHR1cmFMaXZlU3RyZWFtQml0cmF0ZSc7XG5pbXBvcnQgeyBLYWx0dXJhTGl2ZUVudHJ5LCBLYWx0dXJhTGl2ZUVudHJ5QXJncyB9IGZyb20gJy4vS2FsdHVyYUxpdmVFbnRyeSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUxpdmVTdHJlYW1FbnRyeUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUxpdmVFbnRyeUFyZ3Mge1xuICAgIGJpdHJhdGVzPyA6IEthbHR1cmFMaXZlU3RyZWFtQml0cmF0ZVtdO1xuXHRwcmltYXJ5QnJvYWRjYXN0aW5nVXJsPyA6IHN0cmluZztcblx0c2Vjb25kYXJ5QnJvYWRjYXN0aW5nVXJsPyA6IHN0cmluZztcblx0cHJpbWFyeVJ0c3BCcm9hZGNhc3RpbmdVcmw/IDogc3RyaW5nO1xuXHRzZWNvbmRhcnlSdHNwQnJvYWRjYXN0aW5nVXJsPyA6IHN0cmluZztcblx0c3RyZWFtTmFtZT8gOiBzdHJpbmc7XG5cdHN0cmVhbVVybD8gOiBzdHJpbmc7XG5cdGhsc1N0cmVhbVVybD8gOiBzdHJpbmc7XG5cdHVybE1hbmFnZXI/IDogc3RyaW5nO1xuXHRlbmNvZGluZ0lQMT8gOiBzdHJpbmc7XG5cdGVuY29kaW5nSVAyPyA6IHN0cmluZztcblx0c3RyZWFtUGFzc3dvcmQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhTGl2ZVN0cmVhbUVudHJ5IGV4dGVuZHMgS2FsdHVyYUxpdmVFbnRyeSB7XG5cbiAgICByZWFkb25seSBzdHJlYW1SZW1vdGVJZCA6IHN0cmluZztcblx0cmVhZG9ubHkgc3RyZWFtUmVtb3RlQmFja3VwSWQgOiBzdHJpbmc7XG5cdGJpdHJhdGVzIDogS2FsdHVyYUxpdmVTdHJlYW1CaXRyYXRlW107XG5cdHByaW1hcnlCcm9hZGNhc3RpbmdVcmwgOiBzdHJpbmc7XG5cdHNlY29uZGFyeUJyb2FkY2FzdGluZ1VybCA6IHN0cmluZztcblx0cHJpbWFyeVJ0c3BCcm9hZGNhc3RpbmdVcmwgOiBzdHJpbmc7XG5cdHNlY29uZGFyeVJ0c3BCcm9hZGNhc3RpbmdVcmwgOiBzdHJpbmc7XG5cdHN0cmVhbU5hbWUgOiBzdHJpbmc7XG5cdHN0cmVhbVVybCA6IHN0cmluZztcblx0aGxzU3RyZWFtVXJsIDogc3RyaW5nO1xuXHR1cmxNYW5hZ2VyIDogc3RyaW5nO1xuXHRlbmNvZGluZ0lQMSA6IHN0cmluZztcblx0ZW5jb2RpbmdJUDIgOiBzdHJpbmc7XG5cdHN0cmVhbVBhc3N3b3JkIDogc3RyaW5nO1xuXHRyZWFkb25seSBzdHJlYW1Vc2VybmFtZSA6IHN0cmluZztcblx0cmVhZG9ubHkgcHJpbWFyeVNlcnZlck5vZGVJZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUxpdmVTdHJlYW1FbnRyeUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmJpdHJhdGVzID09PSAndW5kZWZpbmVkJykgdGhpcy5iaXRyYXRlcyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFMaXZlU3RyZWFtRW50cnknIH0sXG5cdFx0XHRcdHN0cmVhbVJlbW90ZUlkIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0c3RyZWFtUmVtb3RlQmFja3VwSWQgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRiaXRyYXRlcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUxpdmVTdHJlYW1CaXRyYXRlLCBzdWJUeXBlIDogJ0thbHR1cmFMaXZlU3RyZWFtQml0cmF0ZScgfSxcblx0XHRcdFx0cHJpbWFyeUJyb2FkY2FzdGluZ1VybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZWNvbmRhcnlCcm9hZGNhc3RpbmdVcmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cHJpbWFyeVJ0c3BCcm9hZGNhc3RpbmdVcmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2Vjb25kYXJ5UnRzcEJyb2FkY2FzdGluZ1VybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdHJlYW1OYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0cmVhbVVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRobHNTdHJlYW1VcmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXJsTWFuYWdlciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbmNvZGluZ0lQMSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbmNvZGluZ0lQMiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdHJlYW1QYXNzd29yZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdHJlYW1Vc2VybmFtZSA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHByaW1hcnlTZXJ2ZXJOb2RlSWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhTGl2ZVN0cmVhbUVudHJ5J10gPSBLYWx0dXJhTGl2ZVN0cmVhbUVudHJ5OyJdfQ==