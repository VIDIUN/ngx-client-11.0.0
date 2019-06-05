/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDestFileSyncDescriptor } from './KalturaDestFileSyncDescriptor';
import { KalturaConvartableJobData } from './KalturaConvartableJobData';
/**
 * @record
 */
export function KalturaConvertJobDataArgs() { }
/** @type {?|undefined} */
KalturaConvertJobDataArgs.prototype.destFileSyncLocalPath;
/** @type {?|undefined} */
KalturaConvertJobDataArgs.prototype.destFileSyncRemoteUrl;
/** @type {?|undefined} */
KalturaConvertJobDataArgs.prototype.logFileSyncLocalPath;
/** @type {?|undefined} */
KalturaConvertJobDataArgs.prototype.logFileSyncRemoteUrl;
/** @type {?|undefined} */
KalturaConvertJobDataArgs.prototype.flavorAssetId;
/** @type {?|undefined} */
KalturaConvertJobDataArgs.prototype.remoteMediaId;
/** @type {?|undefined} */
KalturaConvertJobDataArgs.prototype.customData;
/** @type {?|undefined} */
KalturaConvertJobDataArgs.prototype.extraDestFileSyncs;
/** @type {?|undefined} */
KalturaConvertJobDataArgs.prototype.engineMessage;
export class KalturaConvertJobData extends KalturaConvartableJobData {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.extraDestFileSyncs === 'undefined')
            this.extraDestFileSyncs = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaConvertJobData' },
            destFileSyncLocalPath: { type: 's' },
            destFileSyncRemoteUrl: { type: 's' },
            logFileSyncLocalPath: { type: 's' },
            logFileSyncRemoteUrl: { type: 's' },
            flavorAssetId: { type: 's' },
            remoteMediaId: { type: 's' },
            customData: { type: 's' },
            extraDestFileSyncs: { type: 'a', subTypeConstructor: KalturaDestFileSyncDescriptor, subType: 'KalturaDestFileSyncDescriptor' },
            engineMessage: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaConvertJobData.prototype.destFileSyncLocalPath;
    /** @type {?} */
    KalturaConvertJobData.prototype.destFileSyncRemoteUrl;
    /** @type {?} */
    KalturaConvertJobData.prototype.logFileSyncLocalPath;
    /** @type {?} */
    KalturaConvertJobData.prototype.logFileSyncRemoteUrl;
    /** @type {?} */
    KalturaConvertJobData.prototype.flavorAssetId;
    /** @type {?} */
    KalturaConvertJobData.prototype.remoteMediaId;
    /** @type {?} */
    KalturaConvertJobData.prototype.customData;
    /** @type {?} */
    KalturaConvertJobData.prototype.extraDestFileSyncs;
    /** @type {?} */
    KalturaConvertJobData.prototype.engineMessage;
}
typesMappingStorage['KalturaConvertJobData'] = KalturaConvertJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbnZlcnRKb2JEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ29udmVydEpvYkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRixPQUFPLEVBQUUseUJBQXlCLEVBQWlDLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXZHLE1BQU0sNEJBQTZCLFNBQVEseUJBQXlCOzs7O0lBWWhFLFlBQVksSUFBaUM7UUFFekMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztLQUNwRjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDMUUscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RDLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QyxvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckMsb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JDLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyw2QkFBNkIsRUFBRSxPQUFPLEVBQUcsK0JBQStCLEVBQUU7WUFDbEksYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNyQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHVCQUF1QixDQUFDLEdBQUcscUJBQXFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURlc3RGaWxlU3luY0Rlc2NyaXB0b3IgfSBmcm9tICcuL0thbHR1cmFEZXN0RmlsZVN5bmNEZXNjcmlwdG9yJztcbmltcG9ydCB7IEthbHR1cmFDb252YXJ0YWJsZUpvYkRhdGEsIEthbHR1cmFDb252YXJ0YWJsZUpvYkRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29udmFydGFibGVKb2JEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ29udmVydEpvYkRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFDb252YXJ0YWJsZUpvYkRhdGFBcmdzIHtcbiAgICBkZXN0RmlsZVN5bmNMb2NhbFBhdGg/IDogc3RyaW5nO1xuXHRkZXN0RmlsZVN5bmNSZW1vdGVVcmw/IDogc3RyaW5nO1xuXHRsb2dGaWxlU3luY0xvY2FsUGF0aD8gOiBzdHJpbmc7XG5cdGxvZ0ZpbGVTeW5jUmVtb3RlVXJsPyA6IHN0cmluZztcblx0Zmxhdm9yQXNzZXRJZD8gOiBzdHJpbmc7XG5cdHJlbW90ZU1lZGlhSWQ/IDogc3RyaW5nO1xuXHRjdXN0b21EYXRhPyA6IHN0cmluZztcblx0ZXh0cmFEZXN0RmlsZVN5bmNzPyA6IEthbHR1cmFEZXN0RmlsZVN5bmNEZXNjcmlwdG9yW107XG5cdGVuZ2luZU1lc3NhZ2U/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ29udmVydEpvYkRhdGEgZXh0ZW5kcyBLYWx0dXJhQ29udmFydGFibGVKb2JEYXRhIHtcblxuICAgIGRlc3RGaWxlU3luY0xvY2FsUGF0aCA6IHN0cmluZztcblx0ZGVzdEZpbGVTeW5jUmVtb3RlVXJsIDogc3RyaW5nO1xuXHRsb2dGaWxlU3luY0xvY2FsUGF0aCA6IHN0cmluZztcblx0bG9nRmlsZVN5bmNSZW1vdGVVcmwgOiBzdHJpbmc7XG5cdGZsYXZvckFzc2V0SWQgOiBzdHJpbmc7XG5cdHJlbW90ZU1lZGlhSWQgOiBzdHJpbmc7XG5cdGN1c3RvbURhdGEgOiBzdHJpbmc7XG5cdGV4dHJhRGVzdEZpbGVTeW5jcyA6IEthbHR1cmFEZXN0RmlsZVN5bmNEZXNjcmlwdG9yW107XG5cdGVuZ2luZU1lc3NhZ2UgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDb252ZXJ0Sm9iRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmV4dHJhRGVzdEZpbGVTeW5jcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuZXh0cmFEZXN0RmlsZVN5bmNzID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUNvbnZlcnRKb2JEYXRhJyB9LFxuXHRcdFx0XHRkZXN0RmlsZVN5bmNMb2NhbFBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVzdEZpbGVTeW5jUmVtb3RlVXJsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGxvZ0ZpbGVTeW5jTG9jYWxQYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGxvZ0ZpbGVTeW5jUmVtb3RlVXJsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZsYXZvckFzc2V0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVtb3RlTWVkaWFJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjdXN0b21EYXRhIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGV4dHJhRGVzdEZpbGVTeW5jcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURlc3RGaWxlU3luY0Rlc2NyaXB0b3IsIHN1YlR5cGUgOiAnS2FsdHVyYURlc3RGaWxlU3luY0Rlc2NyaXB0b3InIH0sXG5cdFx0XHRcdGVuZ2luZU1lc3NhZ2UgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUNvbnZlcnRKb2JEYXRhJ10gPSBLYWx0dXJhQ29udmVydEpvYkRhdGE7Il19