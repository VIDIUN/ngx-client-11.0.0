/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPlaybackProtocol } from './KalturaPlaybackProtocol';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaLiveStreamConfigurationArgs() { }
/** @type {?|undefined} */
KalturaLiveStreamConfigurationArgs.prototype.protocol;
/** @type {?|undefined} */
KalturaLiveStreamConfigurationArgs.prototype.url;
/** @type {?|undefined} */
KalturaLiveStreamConfigurationArgs.prototype.publishUrl;
/** @type {?|undefined} */
KalturaLiveStreamConfigurationArgs.prototype.backupUrl;
/** @type {?|undefined} */
KalturaLiveStreamConfigurationArgs.prototype.streamName;
export class KalturaLiveStreamConfiguration extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaLiveStreamConfiguration' },
            protocol: { type: 'es', subTypeConstructor: KalturaPlaybackProtocol, subType: 'KalturaPlaybackProtocol' },
            url: { type: 's' },
            publishUrl: { type: 's' },
            backupUrl: { type: 's' },
            streamName: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaLiveStreamConfiguration.prototype.protocol;
    /** @type {?} */
    KalturaLiveStreamConfiguration.prototype.url;
    /** @type {?} */
    KalturaLiveStreamConfiguration.prototype.publishUrl;
    /** @type {?} */
    KalturaLiveStreamConfiguration.prototype.backupUrl;
    /** @type {?} */
    KalturaLiveStreamConfiguration.prototype.streamName;
}
typesMappingStorage['KalturaLiveStreamConfiguration'] = KalturaLiveStreamConfiguration;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVTdHJlYW1Db25maWd1cmF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTGl2ZVN0cmVhbUNvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQVdsRixNQUFNLHFDQUFzQyxTQUFRLGlCQUFpQjs7OztJQVFqRSxZQUFZLElBQTBDO1FBRWxELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUNuRixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHVCQUF1QixFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtZQUM3RyxHQUFHLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2xCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGdDQUFnQyxDQUFDLEdBQUcsOEJBQThCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVBsYXliYWNrUHJvdG9jb2wgfSBmcm9tICcuL0thbHR1cmFQbGF5YmFja1Byb3RvY29sJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhTGl2ZVN0cmVhbUNvbmZpZ3VyYXRpb25BcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgcHJvdG9jb2w/IDogS2FsdHVyYVBsYXliYWNrUHJvdG9jb2w7XG5cdHVybD8gOiBzdHJpbmc7XG5cdHB1Ymxpc2hVcmw/IDogc3RyaW5nO1xuXHRiYWNrdXBVcmw/IDogc3RyaW5nO1xuXHRzdHJlYW1OYW1lPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUxpdmVTdHJlYW1Db25maWd1cmF0aW9uIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcHJvdG9jb2wgOiBLYWx0dXJhUGxheWJhY2tQcm90b2NvbDtcblx0dXJsIDogc3RyaW5nO1xuXHRwdWJsaXNoVXJsIDogc3RyaW5nO1xuXHRiYWNrdXBVcmwgOiBzdHJpbmc7XG5cdHN0cmVhbU5hbWUgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFMaXZlU3RyZWFtQ29uZmlndXJhdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTGl2ZVN0cmVhbUNvbmZpZ3VyYXRpb24nIH0sXG5cdFx0XHRcdHByb3RvY29sIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBsYXliYWNrUHJvdG9jb2wsIHN1YlR5cGUgOiAnS2FsdHVyYVBsYXliYWNrUHJvdG9jb2wnIH0sXG5cdFx0XHRcdHVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwdWJsaXNoVXJsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGJhY2t1cFVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdHJlYW1OYW1lIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFMaXZlU3RyZWFtQ29uZmlndXJhdGlvbiddID0gS2FsdHVyYUxpdmVTdHJlYW1Db25maWd1cmF0aW9uOyJdfQ==